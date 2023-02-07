export function validatePhone(phone) {
  const format = /^\d+(-\d+)*$/
  return phone.trim().length <= 12 && phone.match(format)
    ? null
    : "Номер телефона должен содержать только цифры и дефисы. Допустимая длина - до 12 символов включительно"
}
