import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <TextField
            label="Search products"
            variant="outlined"
            value={searchQuery}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" type="submit">Search</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Search;
