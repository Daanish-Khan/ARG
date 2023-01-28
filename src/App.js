import * as React from "react";
import { Box, createTheme, IconButton, ThemeProvider } from "@mui/material";
import InputField from "./components/Input";
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

import eye from "./images/eye.gif";
import bg from "./components/sounds/bg.mp3";

const fieldColor = "#880808";
var isDisabled = false;
const disabledColor = "#824343";

const theme = createTheme({
  typography: {
    fontFamily: 'Minecraft',
  }
});

const EventContext = React.createContext();

function App() {

  const [event, setEvent] = React.useState(0);
  const [mute, setMute] = React.useState(false);

  React.useEffect(() => {
    async function f() {
        await fetch('https://api.uottawaesports.ca/event').then(function(r) {
        return r.json();
      }).then(function(data) {
        setEvent(data.event);
      })
    }
    
    f();

  }, []);

  const handleClick = () => setMute((mute) => !mute);

  function playAudio() {
    if (!mute) {
      document.getElementById("bg").muted = false;
    }
    document.getElementById("bg").volume = 0.10;
    document.getElementById("bg").play();
  }

  return (
    <EventContext.Provider value={event}>
      <ThemeProvider theme={theme}>
        <div>
          <IconButton onClick={handleClick} sx={{ color: fieldColor, position: "absolute", bottom: 10, right: 10}}>
            {!mute ? <VolumeUpIcon fontSize="large" /> : <VolumeOffIcon fontSize="large" />}
          </IconButton>
        </div>
        
        <div
          onMouseOver={playAudio}
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          
          <audio id="bg" loop muted={mute}>
            <source src={bg} type="audio/mp3"></source>
          </audio>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                width: "15%",
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
            inputFontSize="20"
            inputText="Key"
          ></InputField>
        </div>
      </ThemeProvider>
    </EventContext.Provider>
  );
}

export default App;
