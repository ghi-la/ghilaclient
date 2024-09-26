import { Button, Input, Modal, ModalClose, ModalDialog } from '@mui/joy';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { isLoaded, isLoading, openSnackbar } from '../../store/actions';
import { login } from '../../store/services/userService';
import { setCookie } from '../../utils/cookieHelper';

const Login = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(isLoading());
    login(username, password)
      .then((response) => {
        dispatch(openSnackbar('success', 'Login successful'));
        setCookie('token', response.token, 15);

        dispatch({ type: 'SET_USER', payload: response.user });
      })
      .catch((err) => {
        dispatch(openSnackbar('danger', 'Login failed'));
      })
      .finally(() => {
        dispatch(isLoaded());
      });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog>
        <ModalClose variant="plain" />
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
      </ModalDialog>
    </Modal>
  );
};

export default Login;
