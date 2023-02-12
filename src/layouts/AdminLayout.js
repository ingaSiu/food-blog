import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { ADMIN_POSTS_PATH, ADMIN_CATEGORIES_PATH, ADMIN_COMMENTS_PATH, HOME_PATH } from '../routes/const';

const AdminLayout = ({ children }) => {
  const links = [
    {
      path: ADMIN_POSTS_PATH,
      title: 'Recipes',
    },
    {
      path: ADMIN_CATEGORIES_PATH,
      title: 'Categories',
    },
    {
      path: ADMIN_COMMENTS_PATH,
      title: 'Comments',
    },
  ];

  return (
    <>
      <Navbar links={links} homeLink={HOME_PATH} isAdmin={true}></Navbar>
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default AdminLayout;

const Wrapper = styled.div`
  display: flex;
`;
