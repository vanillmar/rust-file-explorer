import dayjs from "dayjs"

export const formatDate = (isoString?: string) => {
  if (!isoString) return ""
  return dayjs(isoString).format("YYYY-MM-DD HH:mm")
}

export const formatSizeAuto = (sizeStr?: string): string => {
  if (!sizeStr) return ""
  const bytes = parseInt(sizeStr, 10)
  if (bytes < 1024) return `${bytes} B`
  const kb = bytes / 1024
  if (kb < 1024) return `${kb.toFixed(1)} KB`
  const mb = kb / 1024
  if (mb < 1024) return `${mb.toFixed(1)} MB`
  const gb = mb / 1024
  return `${gb.toFixed(2)} GB`
}

// utils/fs.ts or inside your component
export function getSiblings(path: string): string[] {
  // You'd normally call the filesystem here. This is hardcoded for example.
  const mockFs = {
    "/": ["home", "etc", "var"],
    "/home": ["user", "guest", "admin"],
    "/home/user": ["documents", "downloads", "pictures"],
    "/home/user/documents": ["work", "personal"]
  }

  return mockFs[path] ?? []
}
