import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styled from 'styled-components';

export const UserIcon = () => {
  return (
    <IconDiv>
      <AccountCircleIcon />
    </IconDiv>
  );
};

const IconDiv = styled.div`
  align-items: center;

  svg {
    font-size: 38px;
  }
`;

export const UserContent = styled.div`
  display: flex;
  gap: 5px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid lightgray; */
  padding: 10px;
`;

export const UserName = styled.p`
  font-size: 20px;
  margin: 0;
`;

export const Date = styled.p`
  font-size: 12px;
  margin: 0;
`;

export const Comment = styled.p`
  font-size: 20px;
  padding-left: 10px;
  margin-bottom: 10px;
`;

export const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
