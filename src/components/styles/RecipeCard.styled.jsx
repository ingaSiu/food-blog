import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
  }

  p {
    font-weight: bold;
    text-align: left;
  }
`;

export const ContentContainer = styled.div`
  ul {
    text-align: left;
  }
`;
