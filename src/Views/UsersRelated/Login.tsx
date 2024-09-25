import { Button, Input } from '@mui/joy';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { isLoaded, isLoading, openSnackbar } from '../../store/actions';
import { login } from '../../store/services/userService';

const Login = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(isLoading());
    login(username, password)
      .then((response) => {
        dispatch(openSnackbar('success', 'Login successful'));
        // console.log('response', response);
        // setCookie('token', response.token, 15);

        dispatch({ type: 'SET_USER', payload: response.user });
      })
      .catch((err) => {
        dispatch(openSnackbar('danger', 'Login failed'));
      })
      .finally(() => {
        dispatch(isLoaded());
      });
  };

  function setCookie(name: string, value: string, minutes: number) {
    const date = new Date();
    date.setTime(date.getTime() + minutes * 60 * 1000); // Convert minutes to milliseconds
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/; Secure; SameSite=None`;
  }

  return (
    <div>
      <h1>Login</h1>
      <Input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default Login;
