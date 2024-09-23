import { Button, Snackbar } from '@mui/joy';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Spinner from './Components/Spinner';
import Login from './Views/Login/Login';
import {
  closeSnackbar,
  isLoaded,
  isLoading,
  openSnackbar,
} from './store/actions';
import { checkHealth } from './store/services/userService';

function App() {
  const dispatch = useDispatch();
  const snackbar = useSelector((state: any) => state.app.snackbar);
  const loading = useSelector((state: any) => state.app.isLoading);

  return (
    <>
      <Button
        variant="solid"
        color="primary"
        onClick={() => {
          dispatch(isLoading());
          checkHealth()
            .then((res) => {
              dispatch(openSnackbar('success', 'API is healthy'));
            })
            .catch((err) => {
              dispatch(openSnackbar('danger', 'API is not healthy'));
            })
            .finally(() => {
              dispatch(isLoaded());
            });
        }}
      >
        API Healt check
      </Button>
      <Login />
      <Spinner open={loading} />
      <Snackbar
        open={snackbar?.isOpen}
        onClose={() => dispatch(closeSnackbar())}
        variant="solid"
        color={snackbar?.severity}
        autoHideDuration={2000}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      >
        {snackbar?.message}
      </Snackbar>
    </>
  );
}

export default App;
