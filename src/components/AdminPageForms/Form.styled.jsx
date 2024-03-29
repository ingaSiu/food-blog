import styled from 'styled-components';

export const FormBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FormContainer = styled.div`
  margin-bottom: 200px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

export const CommentFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    text-align: center;
  }
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

export const CloseBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
`;
export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
