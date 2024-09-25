const BASE_URL = process.env.REACT_APP_API_ROUTE;

export const checkHealth = async () => {
  const response = await fetch(`${BASE_URL}/health`, {
    method: 'GET',
    mode: 'cors', // Enable CORS
    credentials: 'include', // Send cookies
  });
};

export const login = async (username: string, password: string) => {
  console.log('BASE_URL', BASE_URL);
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ username, password }),
  });

  if (response.ok) {
    return response.json();
  }

  throw new Error('Login failed');
};
export const logout = async () => {
  const response = await fetch(`${BASE_URL}/logout`, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
  });

  if (response.ok) {
    return response.json();
  }

  throw new Error('Logout failed');
};
export const getLoggedUser = async (token: string) => {
  console.log('TOKEN: ', token)
  const response = await fetch(`${BASE_URL}/user`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ token }),
  });

  return response.json();
};