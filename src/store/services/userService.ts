const BASE_URL = process.env.REACT_APP_API_ROUTE;

export const checkHealth = async () => {
  const response = await fetch(`${BASE_URL}/health`, {
    method: 'GET',
    mode: 'cors', // Enable CORS
    credentials: 'include', // If you're sending cookies/auth tokens
  });
};

// export const getAccessToken = async (username: string, password: string) => {

// };
