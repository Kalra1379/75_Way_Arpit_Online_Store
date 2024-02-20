import React from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

interface PriceSliderProps {
  minPrice: number;
  maxPrice: number;
  onChange: (values: number[]) => void;
}

const PriceSlider: React.FC<PriceSliderProps> = ({ minPrice, maxPrice, onChange }) => {
  const [value, setValue] = React.useState<number[]>([minPrice, maxPrice]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    onChange(newValue as number[]);
  };

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <Typography id="price-slider" gutterBottom>
        Price Range
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="price-slider"
        min={minPrice}
        max={maxPrice}
      />
      <Typography gutterBottom>
        Min Price: ${value[0]}
      </Typography>
      <Typography gutterBottom>
        Max Price: ${value[1]}
      </Typography>
    </div>
  );
};

export default PriceSlider;
