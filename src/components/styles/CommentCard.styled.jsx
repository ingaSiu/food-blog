import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

export const UserName = styled.p`
  font-size: 20px;
`;

export const Date = styled.p`
  font-size: 10px;
  margin: 0;
`;

export const Comment = styled.p`
  font-size: 18px;
`;

export const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
