import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Select, MenuItem } from '@mui/material';
import { useState } from 'react';
import {InputLabel} from '@mui/material';
import {Box} from '@mui/material';


const options = [
  { value: 'Option1', label: 'Option 1' },
  { value: 'Option2', label: 'Option 2' },
  { value: 'Option3', label: 'Option 3' },
  // Add more options as needed
];


export default function Form1() {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');

  const handleOption1Change = (event) => {
    setSelectedOption1(event.target.value);
    setSelectedOption2(''); // Reset the second dropdown when the first dropdown changes
  };

  const option2Items = [
    // Add options for the second dropdown based on the selectedOption1 value
    { value: 'Option1', label: 'Option 1' },
    { value: 'Option2', label: 'Option 2' },
    { value: 'Option3', label: 'Option 3' },
    // Add more options as needed based on the selectedOption1 value
  ];
  return (
    <React.Fragment>

      <Box display="flex" alignItems="center" flexDirection="column" justifyContent="space-between" mb={2}>

        <Box my={5}>
          <FormControlLabel
            control={
              <React.Fragment>
                  <InputLabel htmlFor="categorie" sx={{ marginRight: '20px' }}>Categorie:</InputLabel>
                <Select
                  value={selectedOption1}
                  onChange={(e) => handleOption1Change(e.target.value)}
                  variant="standard"
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Sélectionnez une catégorie...
                  </MenuItem>
                  {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </React.Fragment>
            }
          />
          </Box>

          <Box mb={5}>
          <FormControlLabel
            control={
              <React.Fragment>
              <InputLabel htmlFor="action" sx={{ marginRight: '20px' }}>Action:</InputLabel>
              <Select
                value={selectedOption2}
                onChange={(event) => setSelectedOption2(event.target.value)}
                label="Option 2"
                variant="standard"
                displayEmpty
              >
              <MenuItem value="" disabled>
                Sélectionnez un Marqueur...
              </MenuItem>
                {option2Items.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
              </React.Fragment>
            }
          />
          </Box>
        </Box>
    </React.Fragment>
  );
};
