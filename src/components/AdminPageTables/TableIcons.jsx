import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PreviewIcon from '@mui/icons-material/Preview';
import { Link, generatePath } from 'react-router-dom';
import { RECIPE_PAGE_PATH } from '../../routes/const';
import styled from 'styled-components';

export const DelIcon = ({ onClick }) => {
  return (
    <IconDiv>
      <DeleteIcon onClick={onClick} />
    </IconDiv>
  );
};

export const EdIcon = ({ onClick }) => {
  return (
    <IconDiv>
      <EditIcon onClick={onClick} />
    </IconDiv>
  );
};

export const PreviewPage = ({ recipeId }) => {
  return (
    <>
      <LinkStyle to={generatePath(RECIPE_PAGE_PATH, (recipeId = { recipeId }))} target="_blank">
        <PreviewIcon />
      </LinkStyle>
    </>
  );
};

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
`;

const IconDiv = styled.div`
  cursor: pointer;
`;
