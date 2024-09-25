import { Button } from '@mui/joy';
import { useDispatch, useSelector } from 'react-redux';

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);

  const handleLogout = () => {
    // logout().then(() => {
    dispatch({ type: 'CLEAR_USER' });
    // });
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
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
