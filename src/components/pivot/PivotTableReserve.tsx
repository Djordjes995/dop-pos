import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const cellBorderStyle = {
  border: '1px solid #e0e0e0',
  padding: '8px',
};

const MyTable = ({ data, columnDefs }) => {
  const [expandedRows, setExpandedRows] = useState([]);

  const aggregateData = () => {
    const aggregatedData = {};
    data.forEach(row => {
      const key = JSON.stringify(
        columnDefs
          .filter(column => column.rowGroup)
          .map(column => row[column.field])
      );

      if (!aggregatedData[key]) {
        aggregatedData[key] = { ...row };
      } else {
        columnDefs.forEach(column => {
          const { field, rowGroup } = column;
          if (!rowGroup) {
            aggregatedData[key][field] += row[field];
          }
        });
      }
    });
    return Object.values(aggregatedData);
  };

  const aggregatedData = columnDefs.some(column => column.rowGroup) ? aggregateData() : data;

  const toggleExpand = groupKey => {
    setExpandedRows(expandedRows.includes(groupKey)
      ? expandedRows.filter(key => key !== groupKey)
      : [...expandedRows, groupKey]
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {columnDefs.map((column, index) => (
              <TableCell key={index} style={cellBorderStyle}>{column.field}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {aggregatedData.map((row, index) => (
            <React.Fragment key={index}>
              <TableRow onClick={() => toggleExpand(index)}>
                {columnDefs.map((column, columnIndex) => (
                  <TableCell key={columnIndex} style={cellBorderStyle}>
                    {column.rowGroup && expandedRows.includes(index) ? '' : row[column.field]}
                  </TableCell>
                ))}
              </TableRow>
              {columnDefs.some(column => column.rowGroup) &&
                expandedRows.includes(index) && (
                <TableRow>
                  <TableCell colSpan={columnDefs.length} style={{ ...cellBorderStyle, borderTop: 'none' }}>
                    {/* You can render expanded content here */}
                    {/* For example: <div>Expanded content for {row.__groupKey}</div> */}
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyTable;
