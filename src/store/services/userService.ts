const BASE_URL = process.env.REACT_APP_API_ROUTE;

export const checkHealth = async () => {
  const response = await fetch(`${BASE_URL}/health`);
  return response;
};

// export const getAccessToken = async (username: string, password: string) => {

// };
