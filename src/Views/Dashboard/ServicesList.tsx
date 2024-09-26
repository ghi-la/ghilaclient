import { Button } from '@mui/joy';
import { useNavigate } from 'react-router-dom';

const ServicesList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Services List</h1>
      <ul>
        <li>
          <Button color="primary" onClick={() => navigate('/finance')}>
            Finance Manager
          </Button>
        </li>
        <li>
          <Button color="primary" onClick={() => navigate('/comprobio')}>
            Comprobio Manager
          </Button>
        </li>
        <li>Service 3</li>
      </ul>
    </div>
  );
};

export default ServicesList;
