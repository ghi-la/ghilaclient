import { CircularProgress, Modal } from '@mui/joy';

const Spinner = ({ open }: { open: boolean }) => {
  return (
    <Modal open={open}>
      <CircularProgress
        sx={{ position: 'absolute', top: '50%', left: '50%' }}
        color="neutral"
        size="lg"
        variant="plain"
      />
    </Modal>
  );
};

export default Spinner;
