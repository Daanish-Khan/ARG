import * as React from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, IconButton, OutlinedInput, InputLabel, InputAdornment, Box, styled } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import eye from './images/eye.gif'

const fieldColor = '#880808';
var isDisabled = true;

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

const SubmitButton = styled(IconButton) ({
  '&.Mui-disabled': {
    color: "#824343",
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
                height: '20%',
                width: '20%'
              }}
              alt="A mysterious eye watches you..."
              src={eye}
          />
      </div>
      <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <FormInput margin="normal" sx={{ m: 1, width: '30%' }} variant="outlined">
            <InputLabel sx={{color: fieldColor, fontSize: 18}} htmlFor="outlined-adornment-password">Key</InputLabel>
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
        <SubmitButton disabled={isDisabled} aria-label="send" sx={{color: fieldColor}}>
          <SendIcon />
        </SubmitButton>
      </Box>
    </div>
  
  );
}

export default App;
