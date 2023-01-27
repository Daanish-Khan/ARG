import * as React from 'react';
import { Box } from '@mui/material';
import InputField from './components/Input';

import eye from './images/eye.gif'

const fieldColor = '#880808';
var isDisabled = false;
const disabledColor = "#824343";

function App() {
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
      <InputField 
        fieldColor={fieldColor} 
        disabledColor={disabledColor}
        isDisabled={isDisabled}
        inputWidth="30%"
        inputFontSize="18"
        inputText="Key"
        ></InputField>
    </div>
  
  );
}

export default App;
