export function validateName(name) {
  const format = /^[A-ZА-Я]{1}.*/
  return name.trim().match(format)
    ? null
    : "Имя и фамилия должны начинаться с заглавной буквы"
}
