import React, { useState } from 'react';
import { Grid, Paper } from '@mui/material';
import Search from '../components/Search';
import SideBar from './SideBar';
import Products from './Product';

function Home() {
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const handleSearch = (query: string) => {
    // Mocking search results for demonstration
    const results = ['Product 1', 'Product 2', 'Product 3'].filter(product =>
      product.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <Grid container spacing={2}>
      {/* Sidebar */}
      <Grid item xs={3}>
        <Paper>
          <SideBar />
        </Paper>
      </Grid>

      {/* Main Content */}
      <Grid item xs={9}>
        <Paper>
          <Search onSearch={handleSearch} />
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
          <Products />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Home;
