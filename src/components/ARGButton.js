import * as React from 'react';
import { Button, styled } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';

function ARGButton(props) {

    const disabledColor = "#7a6785"

    const StyledButton = styled(Button) ({
        '& .MuiButton-outlined': {
            color: props.fieldColor,
        },
        '& .MuiOutlined-root': {
            '& fieldset': {
                borderColor: props.Color,
            },
            '&:hover fieldset': {
                borderColor: props.Color,
            },
            '&.Mui-focused fieldset': {
                borderColor: props.Color,
            },
            
        },

        '&.Mui-disabled': {
            color: disabledColor,
            borderColor: disabledColor
        },

    });

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <StyledButton
             disabled={props.isDisabled}
             sx={{
                color: props.fieldColor,
                borderColor: props.fieldColor,
                ":hover": {
                    borderColor: props.hoverColor,
                }
            }}
            style={{
                minWidth: props.minWidth,
                maxWidth: props.maxWidth,
            }}
            startIcon={props.isEvent ? <LockOpenIcon /> : <LockIcon />}
            onClick={props.onClick}
            variant="outlined"
            
            >
                ...
            </StyledButton>
        </div>
    );
}

export default ARGButton;