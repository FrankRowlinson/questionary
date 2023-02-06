export function validateTextarea(text) {
  const validLength = 600
  return text.length <= validLength ? null : "Превышен лимит в 600 символов"
}
