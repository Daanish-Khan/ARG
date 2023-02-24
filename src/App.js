import * as React from "react";
import { Box, createTheme, IconButton, ThemeProvider } from "@mui/material";
import InputField from "./components/Input";
import DownloadButton from "./components/DownloadButton";
import ARGButton from "./components/ARGButton";
import SolvedDialog from "./components/SolvedDialog";
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { JigsawPuzzle } from "react-jigsaw-puzzle";
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';

import eye from "./images/eye.gif";
import bg from "./components/sounds/bg.mp3";

const fieldColor = "#880808";
const disabledColor = "#824343";

const theme = createTheme({
  typography: {
    fontFamily: 'Minecraft',
  }
});

const EventContext = React.createContext();

function App() {

  const [argEvent, setArgEvent] = React.useState(1);
  const [mute, setMute] = React.useState(false);
  const [showDownload, setShowDownload] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [isClicked, setIsClicked] = React.useState(false);
  const [isSolved, setIsSolved] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  React.useEffect(() => {
    async function f() {
        await fetch('https://api.uottawaesports.ca/event').then(function(r) {
        return r.json();
      }).then(function(data) {
        setArgEvent(data.event);
      })
    }
    
    f();

  }, []);

  React.useEffect(() => {
    setInterval(() => {
      setShowDownload(true);
    }, 60000);

    setTimeout(() => {
      setInterval(() => {
        setShowDownload(false);
      }, 60000);
    }, 10000);
    
  }, []);
  
  React.useEffect(() => {
    if (argEvent === 9) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true);
    }
  }, [argEvent]);

  const handleClick = () => setMute((mute) => !mute);
  const dialogClose = () => setDialogOpen(false);

  function playAudio() {
    if (!mute) {
      document.getElementById("bg").muted = false;
    }
    document.getElementById("bg").volume = 0.10;
    document.getElementById("bg").play();
  }

  const handleSolved = () => {
    setIsSolved(true);
    setDialogOpen(true);
  }

  return (
    <EventContext.Provider value={argEvent}>
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
          { (argEvent === 12 && !isSolved) ? 
          <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "15vw",
            paddingLeft: "43vw"
            }}>
            <JigsawPuzzle
              imageSrc='https://www.dl.dropboxusercontent.com/s/3a5vc8s5rv7o15g/Logo%20Red.png?dl=0'
              rows={3}
              columns={3}
              onSolved={handleSolved}
            />
          </div>
             : 
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
              alt={isSolved ? "Tu 10-11 Th 2-3" : (argEvent === 4 ? "minus ditditditdahdah dahditditditdit dahditditditdit / dahditditditdit dahditditditdit / minus ditdahdahdahdah dahdahdahdahdah dahdahditditdit break minus dahdahditditdit ditditdahdahdah dahdahdahditdit / dahditditditdit ditditditditdit / dahdahdahdahdit dahdahdahdahdah dahdahdahdahdit break minus ditditdahdahdah ditditditdahdah ditdahdahdahdah / ditdahdahdahdah ditditditdahdah ditditditditdit / minus dahdahdahditdit ditdahdahdahdah dahdahdahdahdit" : (argEvent === 5 ? "WKH HBH FDQ EH HQFKDQWHG" : "A mysterious eye watches you...")}
              src={isClicked ? "https://api.uottawaesports.ca/9": eye }
            />
          </div>}
          <InputField
            fieldColor={fieldColor}
            disabledColor={disabledColor}
            inputWidth="30%"
            inputFontSize="20"
            inputText="Key"
            />
          {(showDownload && argEvent === 2) && 
          <DownloadButton
            minWidth="15%"
            maxWidth="15%"
            fieldColor="#8313C4"
            hoverColor="#9616E0"
            />}
          {(argEvent >= 6 && argEvent < 10) && 
          <ARGButton 
            minWidth="15%"
            maxWidth="15%"
            fieldColor="#8313C4"
            hoverColor="#9616E0"
            isDisabled={isDisabled}
            isEvent={argEvent === 9}
            onClick={() => setIsClicked(true)}
          />}
          <SolvedDialog 
            open={dialogOpen}
            handleClose={dialogClose}
          />
        </div>
        
      </ThemeProvider>
    </EventContext.Provider>
  );
}

export default App;
