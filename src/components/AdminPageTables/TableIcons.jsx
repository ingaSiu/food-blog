import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PreviewIcon from '@mui/icons-material/Preview';
import { Link, generatePath } from 'react-router-dom';
import { RECIPE_PAGE_PATH } from '../../routes/const';
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

export const PreviewPage = ({ recipeId }) => {
  return (
    <>
      <Link to={generatePath(RECIPE_PAGE_PATH, (recipeId = { recipeId }))} target="_blank">
        <PreviewIcon />
      </Link>
    </>
  );
};
