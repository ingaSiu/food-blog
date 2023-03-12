import { ABOUT_ME_PATH, HOME_PATH, TRAVEL_PATH } from '../routes/const';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';
import { useAllCategoriesQuery } from '../hooks/categories';
import { useEffect } from 'react';

const MainLayout = ({ children }) => {
  const { data } = useAllCategoriesQuery();
  const categories = data || [];
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [children]);

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
