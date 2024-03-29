import * as React from 'react';

import { DelIcon, EdIcon } from './TableIcons';
import { useAllPostsQuery, useDeletePost } from '../../hooks/posts';
import { useEffect, useState } from 'react';

import Paper from '@mui/material/Paper';
import { PreviewPage } from './TableIcons';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { toast } from 'react-hot-toast';
import { useAllCategoriesQuery } from '../../hooks/categories';

const PostsTable = ({ openEditModal }) => {
  const { data: posts } = useAllPostsQuery();
  const { data: categories } = useAllCategoriesQuery();
  const [postsWithNames, setPostsWithNames] = useState([]);
  const { mutateAsync: deletePost } = useDeletePost();

  const clickDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this Post?')) {
      deletePost(id)
        .then(() => {
          alert('item was deleted AFTER CALLING FN IN TABlE');
          toast.success('Selected post was deleted succesfully!');
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    posts &&
      setPostsWithNames(
        posts.map((post) => {
          const category =
            categories &&
            categories.find((cat) => {
              return post.categoryId === cat._id;
            });
          return { ...post, categoryTitle: category ? category.title : '' };
        }),
      );
  }, [posts, categories]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Post title</TableCell>
              <TableCell align="center">Post&nbsp;ID</TableCell>
              <TableCell align="center">Category&nbsp;ID</TableCell>
              <TableCell align="center">Category&nbsp;NAME</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center"> Delete</TableCell>
              <TableCell align="center"> View Page</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {postsWithNames.map((post) => (
              <TableRow key={post._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {post.title}
                </TableCell>
                <TableCell align="right">{post._id}</TableCell>
                <TableCell align="right">{post.categoryId}</TableCell>
                <TableCell align="right">{post.categoryTitle}</TableCell>
                <TableCell align="center">{<EdIcon onClick={() => openEditModal(post, post._id)} />}</TableCell>
                <TableCell align="center">{<DelIcon onClick={() => clickDelete(post._id)} />}</TableCell>
                <TableCell align="center">{<PreviewPage recipeId={post._id} />}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PostsTable;

// onClick={() => { window.confirm( 'Are you sure you want to delete this Card?', ) && deleteCard(id) }}
