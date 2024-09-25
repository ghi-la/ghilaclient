import { Button } from '@mui/joy';
import { useDispatch, useSelector } from 'react-redux';
import { setCookie } from '../../utils/cookieHelper';

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);

  const handleLogout = () => {
    // logout().then(() => {
    dispatch({ type: 'CLEAR_USER' });
    // });
    setCookie('token', '', 0);
  };

  return (
    <>
      <Button color="danger" onClick={handleLogout}>
        Logout
      </Button>
      <h1>Welcome {user.username}</h1>
    </>
  );
};

export default Dashboard;
