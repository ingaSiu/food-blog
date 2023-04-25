import { TableWrapper, TitleContainer } from '../../components/AdminPageTables/Table.styled';

import ButtonMain from '../../components/Button';
import CreateNewPost from '../../components/AdminPageForms/PostPostsForm';
import PostsTable from '../../components/AdminPageTables/PostsTable';
import { TablePageContainer } from '../../components/AdminPageTables/Table.styled';
import { useState } from 'react';

const AdminPosts = () => {
  const [openForm, setOpenForm] = useState(false);
  const [post, setPost] = useState(null);
  const [postId, setPostId] = useState(null);

  const openModal = (postInFnc, postIdInFnc) => {
    setOpenForm(true);
    setPost(postInFnc);
    setPostId(postIdInFnc);
  };

  return (
    <TablePageContainer>
      <TableWrapper>
        <TitleContainer>
          <h1>All blog posts</h1>
          <ButtonMain
            onClick={() => {
              openModal();
            }}
          >
            Create a new post
          </ButtonMain>
        </TitleContainer>

        <PostsTable openEditModal={openModal}></PostsTable>
      </TableWrapper>

      {openForm && <CreateNewPost closeForm={setOpenForm} post={post} postId={postId} />}
    </TablePageContainer>
  );
};

export default AdminPosts;
