export function splitCamelCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2');
}
