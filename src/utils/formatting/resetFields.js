export function resetFields(fields) {
  const result = {}
  for (let field of Object.keys(fields)) {
    result[field] = ""
  }
  return result
}
