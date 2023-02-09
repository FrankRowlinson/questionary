export const maskPhone = (phone) => {
  return phone.replace(/(\d{1})(\d{4})(\d{2})(\d{2})/, "$1-$2-$3-$4")
}
