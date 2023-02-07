export function required(value) {
  return value.trim().length > 0 ? null : "Поле обязательно к заполнению"
}
