import * as React from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, IconButton, OutlinedInput, InputLabel, InputAdornment, Box, styled, FormHelperText } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import eye1 from './sounds/eye1.ogg'
import eye2 from './sounds/eye2.ogg'
import eye3 from './sounds/eye3.ogg'

const fieldColor = "#880808";
const disabledColor = "#824343";

const FormInput = styled(FormControl) ({
    '& label.Mui-focused': {
        color: fieldColor,
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
        color: disabledColor,
    },
});

function InputField(props) {

    const [showPassword, setShowPassword] = React.useState(false);
    const [correctToggle, setCorrectToggle] = React.useState(false);
    const [hasInputted, setHasInputted] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const keyRef = React.useRef();

    function play(num) {
        if (num === 0) {
            new Audio(eye1).play()

        } 

        if (num === 1) {
            new Audio(eye2).play()
        }

        if (num === 3) {
            new Audio(eye3).play()
        }
    }

    const onClickHandler = async () => {

        setHasInputted(true);

        await fetch('https://api.uottawaesports.ca/key?k=' + keyRef.current.value).then(function(r) {
            return r.json();
        }).then(function(data) {
           if (data.valid) {
            setCorrectToggle(true);
            play(Math.floor(Math.random() * 3));
           } else {
            setCorrectToggle(false);
           }
        })
        
        keyRef.current.value = '';

    };


    return (
        <Box 
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
        <FormInput error={hasInputted ? !correctToggle : false} margin="normal" sx={{ m: 1, width: props.inputWidth }} variant="outlined">
            <InputLabel sx={{color: props.fieldColor, fontSize: parseInt(props.inputFontSize)}} htmlFor="outlined-adornment-password">{props.inputText}</InputLabel>
            <OutlinedInput  
              inputRef={keyRef}
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
            <FormHelperText id="component-error-text">Incorrect key</FormHelperText>
        </FormInput>
        <SubmitButton onClick={onClickHandler} disabled={props.isDisabled} aria-label="send" sx={{color: props.fieldColor, marginTop: -2}}>
          <SendIcon />
        </SubmitButton>
      </Box>
    );
}

export default InputField;