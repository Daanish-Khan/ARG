import * as React from "react";
import { Box, createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import InputField from "./components/Input";

import eye from "./images/eye.gif";
import bg from "./components/sounds/bg.mp3";
import Minecraft from './components/fonts/font.otf'

const fieldColor = "#880808";
var isDisabled = false;
const disabledColor = "#824343";

function playAudio() {
  document.getElementById("bg").muted = false;
  document.getElementById("bg").volume = 0.10;
  document.getElementById("bg").play();
}

const theme = createTheme({
  typography: {
    fontFamily: 'Minecraft',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
        <audio id="bg" loop>
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
          inputFontSize="18"
          inputText="Key"
        ></InputField>
      </div>
    </ThemeProvider>
  );
}

export default App;
