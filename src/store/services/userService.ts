const BASE_URL = process.env.REACT_APP_API_ROUTE;

export const checkHealth = async () => {
  const response = await fetch(`${BASE_URL}/health`, {
    method: 'GET',
    mode: 'cors', // Enable CORS
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
  });

  if (response.ok) {
    return response.json();
  }

  throw new Error('Logout failed');
};
export const getLoggedUser = async (token: string) => {
  const response = await fetch(`${BASE_URL}/user`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};