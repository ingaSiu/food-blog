import { useState } from 'react';
import { TableWrapper, TitleContainer } from '../../components/AdminPageTables/Table.styled';
import CreateNewPost from '../../components/AdminPageForms/PostPostsForm';
import { PostsPageContainer } from '../../components/AdminPageTables/Table.styled';
import PostsTable from '../../components/AdminPageTables/PostsTable';
import ButtonMain from '../../components/Button';

const AdminPosts = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <PostsPageContainer>
      <TableWrapper>
        <TitleContainer>
          <h1>All blog posts</h1>
          <ButtonMain
            onClick={() => {
              setOpenForm(true);
            }}
          >
            Create a new post
          </ButtonMain>
        </TitleContainer>

        <PostsTable></PostsTable>
      </TableWrapper>

      {openForm && <CreateNewPost closeForm={setOpenForm} />}
    </PostsPageContainer>
  );
};

export default AdminPosts;
