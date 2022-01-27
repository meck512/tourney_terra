import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const CategorySelect = () => {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Category Select</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="Sports" control={<Radio />} label="Sports" />
        <FormControlLabel value="E-Sports" control={<Radio />} label="E-Sports" />
        <FormControlLabel value="Gambling/Bingo" control={<Radio />} label="Gambling/Bingo" />
        <FormControlLabel value="Cooking/Crafts" control={<Radio />} label="Cooking/Crafts" />
      </RadioGroup>
    </FormControl>
  );
}


export default CategorySelect;