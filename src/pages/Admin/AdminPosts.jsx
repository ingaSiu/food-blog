import { TableWrapper } from '../../components/AdminPageTables/Table.styled';
import CreateNewPost from '../../components/AdminPageForms/PostPostsForm';
import { PostsContainer } from '../../components/styles/MainPage.styled';
import PostsTable from '../../components/AdminPageTables/PostsTable';

const AdminPosts = () => {
  return (
    <PostsContainer>
      <TableWrapper>
        <h1>All blog posts</h1>
        <PostsTable></PostsTable>
      </TableWrapper>

      <CreateNewPost></CreateNewPost>
    </PostsContainer>
  );
};

export default AdminPosts;
