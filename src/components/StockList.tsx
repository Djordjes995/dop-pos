import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  TextField,
  Paper,
  Divider,
  Grid,
} from '@mui/material';

const StockList = ({ onUpdateStock, onDeleteStock }) => {
  const handleQuantityChange = (itemId, quantity) => {
    onUpdateStock(itemId, quantity);
  };

  const stocks = [
    {
      id: 1,
      name: 'Widget A',
      description: 'A high-quality widget for everyday use.',
      price: 19.99,
      wanted: 0,
    },
    {
      id: 2,
      name: 'Gizmo X',
      description: 'The latest and greatest gizmo with advanced features.',
      price: 49.99,
      wanted: 0,
    },
    {
      id: 3,
      name: 'Thingamajig B',
      description: 'A versatile thingamajig for various tasks.',
      price: 12.49,
      wanted: 0,
    },
    {
      id: 4,
      name: 'Doodad Z',
      description: 'A popular doodad with a stylish design.',
      price: 29.95,
      wanted: 0,
    },
  ];

  return (
    <Paper sx={{ borderRadius: 1 }}>
      <List>
        {stocks.map((stock, index) => (
          <div key={stock.id}>
            <ListItem>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={7}>
                  <ListItemText
                    primary={stock.name}
                    secondary={stock.description + ' - Price: ' + stock.price}
                  />
                </Grid>
                <Grid item xs={5}>
                  <ListItemSecondaryAction>
                    <TextField
                      type="number"
                      label="Wanted"
                      value={stock.wanted}
                      onChange={(e) => handleQuantityChange(stock.id, e.target.value)}
                      InputProps={{
                        inputProps: { min: 0 },
                      }}
                    />
                  </ListItemSecondaryAction>
                </Grid>
              </Grid>
            </ListItem>
            {index < stocks.length - 1 && <Divider />} {/* Add a divider except for the last item */}
          </div>
        ))}
      </List>
    </Paper>
  );
};

export default StockList;