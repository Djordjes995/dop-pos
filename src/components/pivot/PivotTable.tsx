import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Paper } from '@mui/material';

const PivotTable = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  // Extracting column names from the first object in the data array
  const columns = Object.keys(data[0]);

  return (
    <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          {columns.map((column, index) => (
            <TableCell key={index}>{column}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            {columns.map((column, columnIndex) => (
              <TableCell key={columnIndex}>{row[column]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </TableContainer>
  );
};

export default PivotTable;
