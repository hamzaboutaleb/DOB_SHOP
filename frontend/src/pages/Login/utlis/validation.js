export function validateUsername(username) {
  return username.value.trim().length !== 0;
}

export function validatePassword(password) {
  return password.value.length >= 3;
}
