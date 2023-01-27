import * as React from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, IconButton, OutlinedInput, InputLabel, InputAdornment, Box, styled } from '@mui/material';

import eye from './images/eye.gif'

const fieldColor = 'white';

const FormInput = styled(FormControl) ({
  '& label.Mui-focused': {
    color: fieldColor,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: fieldColor,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: fieldColor,
    },
    '&:hover fieldset': {
      borderColor: fieldColor,
    },
    '&.Mui-focused fieldset': {
      borderColor: fieldColor,
    },
  },
});

function App() {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box
              component="img"
              sx={{
                width: '15%',
                height: '15%'
              }}
              alt="The house from the offer."
              src={eye}
          />
      </div>
      <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <FormInput margin="normal" sx={{ m: 1, width: '25%' }} variant="outlined">
            <InputLabel sx={{color: 'white'}} htmlFor="outlined-adornment-password">Key</InputLabel>
            <OutlinedInput 
              sx={{color: fieldColor}}
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    sx={{color: fieldColor}}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
        </FormInput>
      </Box>
    </div>
  
  );
}

export default App;
