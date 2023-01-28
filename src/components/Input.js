import * as React from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, IconButton, OutlinedInput, InputLabel, InputAdornment, Box, styled } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const getRequest = async (key) => {
    const resp = await fetch('https://api.uottawaesports.ca/key?k=' + key).then(function(r) {
        return r.json();
    }).then(function(data) {
        console.log(data)
    })
};

function InputField(props) {

    const FormInput = styled(FormControl) ({
        '& label.Mui-focused': {
            color: props.fieldColor,
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: props.fieldColor,
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: props.fieldColor,
            },
            '&:hover fieldset': {
                borderColor: props.fieldColor,
            },
            '&.Mui-focused fieldset': {
                borderColor: props.fieldColor,
            },
        },
    });

    const SubmitButton = styled(IconButton) ({
        '&.Mui-disabled': {
            color: props.disabledColor,
        },
    });

    const [showPassword, setShowPassword] = React.useState(false);
    const [key, setKey] = React.useState('');

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const setInput = (event) => {
        setKey(event.target.value);
    }

    const onClickHandler = (k) => {
        getRequest(key);
    };


    return (
        <Box 
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
        <FormInput margin="normal" sx={{ m: 1, width: props.inputWidth }} variant="outlined">
            <InputLabel sx={{color: props.fieldColor, fontSize: parseInt(props.inputFontSize)}} htmlFor="outlined-adornment-password">{props.inputText}</InputLabel>
            <OutlinedInput 
              onChange={setInput}
              sx={{color: props.fieldColor}}
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    sx={{color: props.fieldColor}}
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
        <SubmitButton onClick={() => onClickHandler(key)} disabled={props.isDisabled} aria-label="send" sx={{color: props.fieldColor}}>
          <SendIcon />
        </SubmitButton>
      </Box>
    );
}

export default InputField;