import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useContext } from 'react';

import { PostsContext } from '../../contexts/PostsContext';
import DeleteIcon from '@mui/icons-material/Delete';
export default function BasicTable() {
  const { posts } = useContext(PostsContext);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Post title</TableCell>
            <TableCell align="right">Post&nbsp;ID</TableCell>
            <TableCell align="right">Category&nbsp;ID</TableCell>

            <TableCell align="right">Edit&nbsp;or Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {post.title}
              </TableCell>
              <TableCell align="right">{post._id}</TableCell>
              <TableCell align="right">{post.categoryId}</TableCell>

              <TableCell align="right">{}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
