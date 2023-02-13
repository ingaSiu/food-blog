import { TableWrapper } from '../../components/AdminPageTables/Table.styled';
import CreateNewPost from '../../components/AdminPageForms/PostPostsForm';

import PostsTable from '../../components/AdminPageTables/PostsTable';

const AdminPosts = () => {
  return (
    <>
      <TableWrapper>
        <h1>All blog posts</h1>
        <PostsTable></PostsTable>
      </TableWrapper>

      <CreateNewPost></CreateNewPost>
    </>
  );
};

export default AdminPosts;
