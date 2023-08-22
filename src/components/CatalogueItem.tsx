import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CatalogueItem = ({ sku_name, category, sub_category, price, short_description }) => {
  return (
    <div style={{ height: '100%' }}>
      <Card sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 1,
      }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {sku_name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {category} - {sub_category}
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            ${price}
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
            {short_description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CatalogueItem;