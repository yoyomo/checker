export const getCookie = name => {
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [key, value] = cookie.split('=');
    if (key.trim() === name) {
      return value;
    }
  }
}

export const setCookie = (key, value) => {
  document.cookie = `${key}=${value}`;
}