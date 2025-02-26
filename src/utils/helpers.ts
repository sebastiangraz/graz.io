export function getPrevPathFromExtension(path: string, extension = ".mdx") {
  const regex = new RegExp(`/[^/]+${extension}$`);
  const match = path.match(regex);
  return match
    ? path.slice(path.lastIndexOf("/", path.length - match[0].length - 1) + 1, path.length - match[0].length)
    : "";
}
