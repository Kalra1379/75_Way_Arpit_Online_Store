import React from 'react'
import PriceSlider from '../components/SideBarComponents/PriceSlider'
import Filters from '../components/SideBarComponents/Filters';

interface FiltersState {
    category: string;
    variant: string;
    price: string;
    stock: boolean;
  }
  

function SideBar() {
    const handlePriceChange = (values: number[]) => {
        console.log('Price range changed:', values);
      };
      const handleApplyFilters = (filters: FiltersState) => {
        // Implement logic to apply filters
        console.log('Applied filters:', filters);
      };
  return (
    <div>
    <PriceSlider minPrice={0} maxPrice={1000} onChange={handlePriceChange} />

    <Filters onApplyFilters={handleApplyFilters} />
    </div>
  )
}

export default SideBar
