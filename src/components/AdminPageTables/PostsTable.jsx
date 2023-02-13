import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useContext } from 'react';
import { CategoryContext } from '../../contexts/CategoryContext';
import { PostsContext } from '../../contexts/PostsContext';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState, useEffect } from 'react';

const PostsTable = ({ delIcon, editIcon }) => {
  const { posts } = useContext(PostsContext);
  const { categories } = useContext(CategoryContext);
  const [postsWithNames, setPostsWithNames] = useState([]);

  useEffect(() => {
    setPostsWithNames(
      posts.map((post) => {
        const category = categories.find((cat) => {
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
                <TableCell align="center">{(editIcon = <EditIcon />)}</TableCell>
                <TableCell align="center">{(delIcon = <DeleteIcon />)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PostsTable;
