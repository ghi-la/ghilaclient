import { User } from './types';

export const isLoading = () => ({
  type: 'IS_LOADING',
});
export const isLoaded = () => ({
  type: 'IS_LOADED',
});

export const openSnackbar = (severity: string, message: string) => ({
  type: 'OPEN_SNACKBAR',
  payload: {
    isOpen: true,
    severity,
    message,
  },
});
export const closeSnackbar = () => ({
  type: 'CLOSE_SNACKBAR',
  payload: {
    isOpen: false,
  },
});

// USER ACTIONS
export const setUser = (user: User) => ({
  type: 'SET_USER',
  payload: {
    user,
  },
});
export const clearUser = () => ({
  type: 'CLEAR_USER',
});
