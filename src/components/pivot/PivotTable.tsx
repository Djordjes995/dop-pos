import React, { useState } from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

const cellBorderStyle = {
  border: '1px solid #e0e0e0',
  padding: '8px',
};

const PivotTable = ({ data, rows, values }) => {
  // Extracting unique rows and values names
  const rowNames = rows.map(row => row.name);
  const valueNames = values.map(value => ({ name: value.name, caption: value.caption }));
  const columnsToShow = [
    { name: 'pivotRowName', caption: 'Pivot Row' },
    ...valueNames
  ]
  const [expandedRows, setExpandedRows] = useState([]);

  // Aggregate data based on rows and values
  const aggregatedData = data.reduce((acc, curr) => {
    let rowIndex = 0 // TODO: PROBABLY NOT WORKING, HAVE TO SET IT DYNAMICALLY
    const key = curr[rowNames[rowIndex]]
    const existingItem = acc.find(item => item.pivotRowName === key);
    if (existingItem) {
      rowIndex++
      valueNames.forEach(value => {
        existingItem[value.name] += curr[value.name] || 0;
      });
      existingItem.aggregatedElements.push({
        pivotRowName: curr[rowNames[rowIndex]],
        ...curr
      });
    } else {
      const newItem = {
        ...curr,
        pivotRowName: key,
        ...Object.fromEntries(valueNames.map(value => [value.name, curr[value.name] || 0])),
        aggregatedElements: [{
          pivotRowName: curr[rowNames[rowIndex + 1]],
          ...curr
        }]
      };
      acc.push(newItem);
    }
    return acc;
  }, []);

  const toggleExpand = (groupKey) => {
    setExpandedRows(expandedRows.includes(groupKey)
      ? expandedRows.filter(key => key !== groupKey)
      : [...expandedRows, groupKey]
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columnsToShow.map((column, index) => (
              <TableCell key={index} align="center" style={{ ...cellBorderStyle, backgroundColor: '#f2f2f2', fontWeight: 'bold' }}>{column.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {aggregatedData.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <TableRow key={rowIndex} onClick={() => toggleExpand(row.pivotRowName)}>
                {columnsToShow.map((column, colIndex) => (
                  <TableCell key={`${rowIndex}-${colIndex}`} style={{ ...cellBorderStyle, borderTop: 'none' }}>{row[column.name]}</TableCell>
                ))}
              </TableRow>
              {row.aggregatedElements?.length &&
                expandedRows.includes(row.pivotRowName) && row.aggregatedElements.map(aggregatedRow => (
                  <TableRow>
                    {columnsToShow.map((column, colIndex) => (
                      <TableCell style={{ ...cellBorderStyle, borderTop: 'none' }}>
                        {aggregatedRow[column.name]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              }
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PivotTable;
