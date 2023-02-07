import * as React from 'react';
import { Button, styled } from '@mui/material';

function DownloadButton(props) {

    const DlButton = styled(Button) ({
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

    });

    return (

        <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
          <DlButton sx={{ 
            color: props.fieldColor, 
            borderColor: props.fieldColor, 
            ":hover": { 
                borderColor: props.hoverColor, 
                }
            }}
            style={{
                minWidth: props.minWidth, 
                maxWidth: props.maxWidth
            }}
            href="https://api.uottawaesports.ca/file"
            variant="outlined">
              ????
          </DlButton>
        </div>

    );

}

export default DownloadButton;