# 🗂️ Rust File Explorer

A modern, sleek, and fully-featured file explorer built with Rust — inspired by Windows File Explorer.

![screenshot](./assets/screenshot.png)

## 🚀 Features

### ✅ Core Features (MVP)

- **Directory Navigation**
  - Navigate folders with tree structure, breadcrumbs, and navigation history (Back, Forward, Up)
  
- **File and Folder Display**
  - Display file/folder name, size, type, and last modified date with corresponding icons
  
- **Basic File Operations**
  - Open, copy, cut, paste, delete, rename
  - Create new folders and files

- **Editable Path Bar**
  - See and edit the full path to the current directory

- **Search**
  - Quick file/folder search within current directory
  - Optional recursive search in subdirectories

- **Sort and View Options**
  - Sort by name, size, type, or date modified
  - View as list, detailed view, or icon grid

- **Context Menus**
  - Right-click to access contextual file/folder options

- **Drag & Drop**
  - Move or copy files and folders easily using drag-and-drop

- **Status Bar**
  - Displays total item count, selected item size, and quick info

---

### ✨ Advanced Features

- **Tabbed Interface**
  - Open multiple directories in tabs, just like a browser

- **File Preview Pane**
  - Preview content for images, videos, PDFs, and more

- **Favorites / Quick Access**
  - Pin your most-used folders for instant access

- **Tagging & Labels**
  - Add color-coded tags to organize your files visually

- **Breadcrumb Navigation**
  - Easy click-through path traversal

- **Integrated Terminal**
  - Launch a terminal window in the current directory

- **Undo/Redo for Operations**
  - Revert or repeat file operations easily

- **Theme Support**
  - Light, dark, and custom themes

- **Search Indexing**
  - Faster file search with background indexing support

- **Plugin System**
  - Extend the explorer with community or custom-built extensions

- **Keyboard Shortcuts**
  - Power-user friendly keybindings

---

### 🛡️ System-Level Enhancements

- **Real-Time File System Monitoring**
  - Instant UI updates on external file changes

- **File Permission Management**
  - View and manage file/folder permissions

- **Custom Icons**
  - Support for custom icon themes and file type associations

- **Optimized for Large Directories**
  - High performance and smooth scrolling in folders with thousands of files

---

## 🧪 Tech Stack

- **Language**: Rust 🦀
- **GUI Framework**: [Tauri ]
- **File System Access**: Rust `std::fs`, `walkdir`, `notify`
- **Cross-platform Support**: Windows, Linux, macOS

---

## Dependencies
Dependency | Version | Description
Rust | 1.86.0 | Systems programming language used for backend logic
React | 18.3.1 | Frontend UI library for building dynamic interfaces
Tauri | 1.5.x | Framework for building Rust-powered desktop apps with a web frontend
Cargo | 1.86.0 | Rust package manager and build tool
TypeScript | 5.6.2 | Typed superset of JavaScript for frontend
Vite | 5.x.x | Lightning-fast frontend build tool
Tailwind CSS | 3.x.x | Utility-first CSS framework for styling
ESLint | 8.x.x | Linting tool for JavaScript/TypeScript
Prettier | 3.x.x | Code formatter for consistent styling
Jest | 29.x.x | Testing framework for JavaScript/TypeScript
@tauri-apps/cli | 2.x.x | CLI tool for building and bundling Tauri apps


## 📦 Installation

> _Note: Instructions will vary based on the chosen GUI framework._

```bash
# Clone the repository
git clone https://github.com/vanillmar/rust-file-explorer.git
cd rust-file-explorer

# Build and run
pnpm tauri dev
