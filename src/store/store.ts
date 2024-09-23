import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers/appReducer';
import userReducer from './reducers/userReducer';

export default configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
  },
});
