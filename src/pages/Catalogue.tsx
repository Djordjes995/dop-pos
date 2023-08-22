import { useState } from 'react';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { Card, CardContent, Typography, TextField, MenuItem, Container, Grid, Button, InputAdornment, OutlinedInput, SvgIcon } from '@mui/material';
import { useQuery } from "@tanstack/react-query"
import { fetchCatalogueData } from '../api/ManageApi'
import CatalogueItem from '../components/CatalogueItem';

export default () => {

  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [orderedBefore, setOrderedBefore] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedToHandle, setSelectedToHandle] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const { isLoading, error, data } = useQuery({
    queryKey: ['catalogue'],
    queryFn: fetchCatalogueData,
  })

  const handleSearch = () => {
    // Perform search or filtering logic based on the input values
  };

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <Container>
      <Card sx={{ borderRadius: 1, marginBottom: 4 }}>
        <CardContent sx={{ padding: 4 }}>
          <Typography variant="h6" sx={{ marginBottom: 2 }} gutterBottom>
            Catalogue Filters
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <OutlinedInput
                value={searchText}
                fullWidth
                placeholder="Search customer"
                sx={{ minHeight: '48px' }} 
                startAdornment={(
                  <InputAdornment position="start">
                    <SvgIcon
                      color="action"
                      fontSize="small"
                    >
                      <MagnifyingGlassIcon />
                    </SvgIcon>
                  </InputAdornment>
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                select
                label="Category"
                fullWidth
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                sx={{ height: '54px' }} // Set a consistent minHeight
              >
                <MenuItem value="electronics">Electronics</MenuItem>
                <MenuItem value="clothing">Clothing</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                select
                label="Sub Category"
                fullWidth
                value={selectedSubcategory}
                onChange={(e) => setSelectedSubcategory(e.target.value)}
                sx={{ height: '54px' }} // Set a consistent minHeight
              >
                <MenuItem value="electronics">Electronics</MenuItem>
                <MenuItem value="clothing">Clothing</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                select
                label="Ordered Before"
                fullWidth
                value={orderedBefore}
                onChange={(e) => setOrderedBefore(e.target.value)}
                sx={{ height: '54px' }} // Set a consistent minHeight
              >
                {/* Add menu items for each category */}
                <MenuItem value="clothing">Clothing</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                select
                label="Brand"
                fullWidth
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                sx={{ height: '54px' }} // Set a consistent minHeight
              >
                <MenuItem value="electronics">Electronics</MenuItem>
                <MenuItem value="clothing">Clothing</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                select
                label="To handle"
                fullWidth
                value={selectedToHandle}
                onChange={(e) => setSelectedToHandle(e.target.value)}
                sx={{ height: '54px' }}
              >
                <MenuItem value="electronics">Electronics</MenuItem>
                <MenuItem value="clothing">Clothing</MenuItem>
              </TextField>
            </Grid>
    
            {/* Min and Max Price */}
          </Grid>
          <Button variant="contained" color="primary" onClick={handleSearch} sx={{ mt: 2 }}>
            Apply Filters
          </Button>
        </CardContent>
      </Card>
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CatalogueItem {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
