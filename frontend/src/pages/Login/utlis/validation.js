export function required(username) {
  return username.value.trim().length !== 0;
}

export function longerThan(length) {
  return function (password) {
    return password.value.length >= length;
  };
}

export function isValidEmail(email) {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
}
