import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AdminContext } from '../contexts/AdminContext';
import {
  ADMIN_POSTS_PATH,
  ADMIN_CATEGORIES_PATH,
  ADMIN_COMMENTS_PATH,
  HOME_PATH,
  ADMIN_LOGIN_PATH,
} from '../routes/const';

const AdminLayout = ({ children }) => {
  const { isLoggedIn, setAdmin } = useContext(AdminContext);

  const logOut = () => {
    setAdmin('');
  };
  const navigate = useNavigate();
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

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(ADMIN_LOGIN_PATH);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    isLoggedIn && (
      <>
        <Navbar links={links} homeLink={HOME_PATH} isAdmin={true} onClick={logOut}></Navbar>
        <Wrapper>{children}</Wrapper>
      </>
    )
  );
};

export default AdminLayout;

const Wrapper = styled.div`
  display: flex;
`;
