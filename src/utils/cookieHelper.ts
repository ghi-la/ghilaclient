export function getCookie(name: string) {
  const cookieString = document.cookie;
  const cookies = cookieString.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    // Check if this cookie starts with the desired name
    if (cookie.startsWith(`${name}=`)) {
      return cookie.substring(name.length + 1);
    }
  }

  return ''; // Return empty string if the cookie is not found
}

export function setCookie(name: string, value: string, minutes: number) {
  const date = new Date();
  date.setTime(date.getTime() + minutes * 60 * 1000); // Convert minutes to milliseconds
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/; Secure; SameSite=None`;
}
