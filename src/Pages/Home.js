import React from "react";
import { Typography, Box, Grid } from "@material-ui/core";
import DescriptionIcon from '@material-ui/icons/Description';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <Box style={{display:'block',justifyContent:'center',alignContent:'center',marginTop:'1rem',marginBottom:'1rem'}}>
      <span><Typography style={{display: 'flex',alignContent:'center',justifyContent:'center', color:'white',fontfamily: 'Montserrat'}} variant="h1" alignCenter>Hello;</Typography></span>
      <span><Typography style={{display: 'flex',alignContent:'center',justifyContent:'center', color:'white',fontfamily: 'Montserrat',marginTop: '5%'}} variant="h3" inline><Typewriter
      options={{
        strings: ["Shwetank Singh"],
        autoStart: true,
        loop: true,
      }}
    /></Typography></span>
      <span><Typography style={{display: 'flex',alignContent:'center',justifyContent:'center', color:'white',fontfamily: 'Montserrat'}}variant="h5" inline>I'm a student and web developer</Typography></span>
      <span style={{display: 'flex',alignContent:'center',justifyContent:'center', marginTop:'2rem',color:'white'}}> <a href="https://drive.google.com/drive/folders/14H-Fjf6gKhwjpfaS6sbWBYVML_3K55Qk?usp=sharing" target="_blank"><DescriptionIcon style={{color:'white'}} fontSize="large"/></a></span>
      <span><Typography style={{display: 'flex',alignContent:'center',justifyContent:'center', color:'white',fontfamily: 'Montserrat'}} inline>Resume</Typography></span>
      </Box>
  );
};

export default Home;
