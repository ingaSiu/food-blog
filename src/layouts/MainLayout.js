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

      <Wrapper>{children}</Wrapper>
      <Sidebar categories={categories} />
      <Footer />
    </>
  );
};
export default MainLayout;

const Wrapper = styled.div`
  padding: 20px 40px;
`;
