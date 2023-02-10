import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { useContext } from 'react';
import { CategoryContext } from '../contexts/CategoryContext';
const MainLayout = ({ children }) => {
  const { categories } = useContext(CategoryContext);
  return (
    <>
      <Navbar categories={categories} />
      <FlexContainer>
        <Wrapper>{children}</Wrapper>
        <Sidebar categories={categories} />
      </FlexContainer>

      <Footer />
    </>
  );
};
export default MainLayout;

const Wrapper = styled.div`
  padding: 0 40px;
`;
const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;
