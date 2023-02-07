export function trimFields(fields) {
  const result = {}
  for (let field of Object.keys(fields)) {
    result[field] = fields[field].trim()
  }
  return result
}
