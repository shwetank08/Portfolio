import { Box, MuiThemeProvider } from "@material-ui/core";
import React from "react";
import Typewriter from "typewriter-effect";
import {createMuiTheme, responsiveFontSizes,ThemeProvider,Typography} from "@material-ui/core"

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Skill = () => {

  return (
    <MuiThemeProvider theme={theme}>
    <Box
    style={{
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      textAlign: 'center',
      marginTop: '10rem',
      marginBottom: '2rem'
    }}
    >
    <Typography variant="h1" gutterBottom  >
      <Typewriter
        options={{
          strings: ["C++", "JAVASCRIPT","HTML","CSS","BOOTSTRAP","REACT","MONGODB","NODEJS"],
          autoStart: true,
          loop: true,
        }}
      />
      </Typography>
    </Box>
    </MuiThemeProvider>
  );
};

export default Skill;
