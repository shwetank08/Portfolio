import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: '8%'
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();

  return (
    <BottomNavigation
      style={{background: '#000000'}}
      showLabels
      className={classes.root}
    >
    <a href="mailto:shwetanksingh.in@gmail.com" target="_blank"><BottomNavigationAction style={{ color: 'white', fontfamily: 'Montserrat' }} label="Email" icon={<EmailIcon style={{ color: 'white' }} />} /></a>
    <a href="https://github.com/shwetank08" target="_blank"><BottomNavigationAction style={{ color: 'white',  fontfamily: 'Montserrat' }} label="Github" icon={<GitHubIcon style={{ color: 'white' }} />} /></a>   
    </BottomNavigation>
  );
}
