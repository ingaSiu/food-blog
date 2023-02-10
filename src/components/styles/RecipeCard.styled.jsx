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
    margin-bottom: 20px;
  }

  p {
    font-weight: bold;
  }
`;
export const ImageContainer = styled.div`
  width: 700px;
  img {
    width: 100%;
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ul,
  ol,
  li {
    align-self: flex-start;
  }
  p {
    max-width: 650px;
    padding: 10px;
  }
  h4 {
    font-size: 18px;
  }
  img {
    width: 700px;
  }
`;
