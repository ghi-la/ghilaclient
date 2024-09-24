import { Button } from '@mui/joy';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/services/userService';

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);

  const handleLogout = () => {
    logout().then(() => {
      // window.location.reload();
      dispatch({ type: 'CLEAR_USER' });
    });
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
