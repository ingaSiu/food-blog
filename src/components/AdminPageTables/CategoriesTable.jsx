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
import DeleteIcon from '@mui/icons-material/Delete';

const CategoriesTable = () => {
  const { categories } = useContext(CategoryContext);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Category title</TableCell>
            <TableCell align="center">Category&nbsp;ID</TableCell>
            <TableCell align="center">Edit&nbsp;or Delete</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {categories.map((category) => (
            <TableRow key={category._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {category.title}
              </TableCell>
              <TableCell align="right">{category._id}</TableCell>

              <TableCell align="right">{}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CategoriesTable;
