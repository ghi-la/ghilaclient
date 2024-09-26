import { Snackbar } from '@mui/joy';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Spinner from './Components/Spinner';
import ComprobioManagerHome from './pages/ComprobioManager';
import FinanceManagerHome from './pages/FinanceManagerHome';
import { closeSnackbar, isLoaded, isLoading } from './store/actions';
import { getLoggedUser } from './store/services/userService';
import { getCookie } from './utils/cookieHelper';
import Landing from './Views/Landing';

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
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/finance" element={<FinanceManagerHome />} />
        <Route path="/comprobio" element={<ComprobioManagerHome />} />
      </Routes>

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
