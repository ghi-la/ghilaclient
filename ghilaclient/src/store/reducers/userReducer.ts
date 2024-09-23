import { User } from '../types';

const INITIAL_STATE: User = {
  id: '',
  username: '',
  email: '',
  password_hash: '',
};

const routeReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'SET_LOGGED_USER':
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        email: action.payload.email,
        password_hash: action.payload.password_hash,
      };
    default:
      return state;
  }
};

export default routeReducer;
