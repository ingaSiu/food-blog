import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TableWrapper } from '../../components/AdminPageTables/Table.styled';

import PostsTable from '../../components/AdminPageTables/PostsTable';

const AdminPosts = () => {
  return (
    <TableWrapper>
      <h1>All blog posts</h1>
      <PostsTable></PostsTable>
    </TableWrapper>
  );
};

export default AdminPosts;
