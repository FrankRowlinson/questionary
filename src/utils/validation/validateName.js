export function validateName(name) {
  const format = /[A-ZА-Я]{1}[a-zа-я]*/
  return name.match(format)
    ? null
    : "Имя и фамилия должны начинаться с заглавной буквы"
}
