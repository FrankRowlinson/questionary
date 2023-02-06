export function validateUrl(url) {
  return url.startsWith("https://")
    ? null
    : "Ссылка должна начинаться на https://"
}
