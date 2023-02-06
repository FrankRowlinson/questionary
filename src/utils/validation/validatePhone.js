export function validatePhone(phone) {
  const format = /(\d+-)+\d+/
  return phone.length <= 12 && phone.match(format)
    ? null
    : "Номер телефона должен содержать только дефисы и пробелы. Допустимая длина - до 12 символов включительно"
}
