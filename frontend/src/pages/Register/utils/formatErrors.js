export function formatError(errors) {
  const errorsList = [];
  for (let value of Object.values(errors)) {
    errorsList.push(value[0]);
  }
  return errorsList;
}
