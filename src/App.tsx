import { Snackbar } from '@mui/joy';
import { useDispatch, useSelector } from 'react-redux';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Spinner from './Components/Spinner';
import { closeSnackbar, isLoaded, isLoading } from './store/actions';
import { getLoggedUser } from './store/services/userService';
import { getCookie } from './utils/cookieHelper';
import Dashboard from './Views/Dashboard/Dashboard';
import Login from './Views/UsersRelated/Login';

function App() {
  const dispatch = useDispatch();
  const snackbar = useSelector((state: any) => state.app.snackbar);
  const loading = useSelector((state: any) => state.app.isLoading);
  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    // console.log(getCookie('token'));
    const token = getCookie('token');
    if (!token) {
      return;
    }
    dispatch(isLoading());
    getLoggedUser(getCookie('token'))
      .then((res) => {
        dispatch({ type: 'SET_USER', payload: res });
      })
      .finally(() => {
        dispatch(isLoaded());
      });
  }, []);

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Dashboard />} />
        </Routes>
      </BrowserRouter> */}
      {/* <Button
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
      </Button> */}
      {user?.username ? <Dashboard /> : <Login />}
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
