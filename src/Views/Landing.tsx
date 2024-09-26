import { Button, Typography } from '@mui/joy';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginModal from '../Components/UsersRelated/LoginModal';
import Dashboard from './Dashboard/Dashboard';

const Landing = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);

  const [loginModal, setLoginModal] = useState(false);

  console.log(user);

  return (
    <>
      {user?.id ? (
        <Dashboard />
      ) : (
        <>
          <Typography>
            Welcome to our website! We are excited to offer you a variety of
            services tailored to meet your needs. To explore and access these
            services, please log in to your account. If you don't have one yet,
            it's easy to sign up and start taking full advantage of everything
            we have to offer. Enjoy your experience!
          </Typography>
          <Button onClick={() => setLoginModal(true)}>Login</Button>
          <LoginModal open={loginModal} onClose={() => setLoginModal(false)} />
        </>
      )}
    </>
  );
};
export default Landing;
