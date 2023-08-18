import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    align-self: center;
  }
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
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }

  img {
    width: 100%;

    @media (max-width: 768px) {
      width: 80%;
      height: auto;
    }
    @media (max-width: 400px) {
      width: 40%;
      height: auto;
    }
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
    @media (max-width: 768px) {
      align-self: center;
      width: 50%;
    }
  }
  p {
    width: 650px;
    padding: 10px;
    @media (max-width: 768px) {
      width: 70%;
    }
    @media (max-width: 400px) {
      width: 40%;
    }
  }
  h4 {
    font-size: 18px;
  }
  img {
    max-width: 700px;

    @media (max-width: 768px) {
      max-width: 90%;
      height: auto;
      align-self: center;
    }
    @media (max-width: 400px) {
      width: 40%;
      height: auto;
      align-self: center;
    }
  }
`;
