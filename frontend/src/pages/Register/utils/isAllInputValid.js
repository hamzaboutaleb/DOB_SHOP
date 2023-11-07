export function isAllInputValid(inputs) {
  for (let value of Object.values(inputs)) {
    if (!value.isValid) return false;
  }

  return true;
}
