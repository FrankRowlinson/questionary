export function validateName(name) {
  const format = /[A-ZА-Я]{1}[a-zа-я]*/
  return name.match(format) ? null : "Имя должно начинаться с заглавной буквы"
}
