import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { useContext } from 'react';
import { CategoryContext } from '../contexts/CategoryContext';
import { HOME_PATH, TRAVEL_PATH, ABOUT_ME_PATH } from '../routes/const';

const MainLayout = ({ children }) => {
  const { categories } = useContext(CategoryContext);

  const links = [
    {
      path: HOME_PATH,
      title: 'Recipes',
    },
    {
      path: TRAVEL_PATH,
      title: 'Travel',
    },
    {
      path: ABOUT_ME_PATH,
      title: 'ABOUT ME',
    },
  ];

  return (
    <>
      <Navbar categories={categories} links={links} homeLink={HOME_PATH} isAdmin={false} />
      <FlexContainer>
        <Wrapper>{children}</Wrapper>
        <Sidebar categories={categories} />
      </FlexContainer>

      <Footer />
    </>
  );
};
export default MainLayout;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 0 40px;
`;
