import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, TextField, FormControlLabel, Checkbox, Button } from '@mui/material';

interface FiltersProps {
  onApplyFilters: (filters: FiltersState) => void;
}

interface FiltersState {
  category: string;
  variant: string;
  price: string;
  stock: boolean;
}

const Filters: React.FC<FiltersProps> = ({ onApplyFilters }) => {
  const [filters, setFilters] = useState<FiltersState>({
    category: '',
    variant: '',
    price: '',
    stock: false,
  });


  const handleVariantChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, variant: e.target.value });
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, price: e.target.value });
  };

  const handleStockChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, stock: e.target.checked });
  };

  const handleCategoryChange = (e:any) => {
    setFilters({ ...filters, category: e.target.value as string });
  };

  const applyFilters = () => {
    onApplyFilters(filters);
  };

  return (
    <div>
      <h2>Filters</h2>
      <FormControl fullWidth>
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          value={filters.category}
          label="Category"
          onChange={handleCategoryChange}
        >
          <MenuItem value="">Select Category</MenuItem>
          {/* Populate options dynamically */}
        </Select>
      </FormControl>
      <TextField
        label="Variant"
        value={filters.variant}
        onChange={handleVariantChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Price"
        value={filters.price}
        onChange={handlePriceChange}
        fullWidth
        margin="normal"
      />
      <FormControlLabel
        control={<Checkbox checked={filters.stock} onChange={handleStockChange} />}
        label="Stock"
      />
      <Button variant="contained" onClick={applyFilters}>Apply Filters</Button>
    </div>
  );
};

export default Filters;
