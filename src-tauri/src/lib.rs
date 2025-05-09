// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
use serde::Serialize;
use std::fs::{self, Metadata};
use std::path::Path;
use std::time::{SystemTime, UNIX_EPOCH};

#[derive(Serialize)]
struct FileItem {
    name: String,
    #[serde(rename = "type")]
    item_type: String, // "file" or "folder"
    size: Option<String>,
    modified: Option<String>,
}
#[tauri::command]
fn list_directory(path: String) -> Result<Vec<FileItem>, String> {
    let entries = fs::read_dir(&path).map_err(|e| e.to_string())?;

    let mut items = Vec::new();

    for entry in entries {
        if let Ok(entry) = entry {
            let metadata = entry.metadata().map_err(|e| e.to_string())?;
            let file_type = if metadata.is_dir() {
                "folder".to_string()
            } else {
                "file".to_string()
            };

            let size = if metadata.is_file() {
                Some(format!("{}", metadata.len()))
            } else {
                None
            };

            let modified = metadata.modified().ok().and_then(|mtime| {
                let duration = mtime.duration_since(UNIX_EPOCH).ok()?;
                Some(format!("{}", duration.as_secs()))
            });

            items.push(FileItem {
                name: entry.file_name().to_string_lossy().into_owned(),
                item_type: file_type,
                size,
                modified,
            });
        }
    }

    Ok(items)
}


#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}



#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, list_directory])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
