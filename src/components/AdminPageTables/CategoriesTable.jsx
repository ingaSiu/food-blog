import * as React from 'react';

import { DelIcon, EdIcon } from './TableIcons';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useAllCategoriesQuery } from '../../hooks/categories';

const CategoriesTable = ({ delIcon, editIcon }) => {
  const { data } = useAllCategoriesQuery();
  const categories = data || [];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Category title</TableCell>
            <TableCell align="center">Category&nbsp;ID</TableCell>
            <TableCell align="center">Edit</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {categories.map((category) => (
            <TableRow key={category._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {category.title}
              </TableCell>
              <TableCell align="center">{category._id}</TableCell>
              <TableCell align="center">{(editIcon = <EdIcon onClick={() => alert('test ed')} />)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CategoriesTable;
