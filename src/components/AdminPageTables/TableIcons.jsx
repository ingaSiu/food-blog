import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const DelIcon = ({ onClick }) => {
  return (
    <>
      <DeleteIcon onClick={onClick} />
    </>
  );
};

export const EdIcon = ({ onClick }) => {
  return (
    <>
      <EditIcon onClick={onClick} />
    </>
  );
};
