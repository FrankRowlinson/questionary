export function required(value) {
  return value.length > 0 ? null : "Поле обязательно к заполнению"
}
