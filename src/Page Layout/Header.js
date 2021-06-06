import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import { Link } from "react-router-dom";

import { withRouter } from "react-router-dom";
import "../App.css"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontfamily: "Montserrat",
    backgroundColor: '#3c52b2',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#3c52b2',
  }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontfamily: "Montserrat",
  },
  
}));
const Header = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const matches = useMediaQuery("(min-width:600px)");

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageUrl) => {
    history.push(pageUrl);
    setAnchorEl(null);
  };

  const handleButton = (pageUrl) => {
    history.push(pageUrl);
  };

  return (
    <div className={classes.headerOptions}>
      <AppBar style={{ background: "#000000" }} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Portfolio
          </Typography>
          <div>
            {matches ? (
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="baseline"
              >
                <Link to="/" style={{ color: "#ffffff",textDecoration:'none' }}>
                  <Button  variant="outlined" color="white" style={{marginLeft: '0.5rem', marginRight:'0.5rem',color:'white'}} >
                    Home
                  </Button>
                </Link>
                <Link to="/skill" style={{ color: "#ffffff",textDecoration:'none' }}>
                  <Button  variant="outlined" color="white" style={{marginLeft: '0.5rem', marginRight:'0.5rem',color:'white'}} >
                    Skills
                  </Button>
                </Link>

                <Link
                  to="/project"
                  style={{ color: "#ffffff",textDecoration:'none' }}
                >
                  <Button variant="outlined" color="white" className={classes["&:active"]} style={{marginLeft: '0.5rem', marginRight:'0.5rem',color:'white' }}>
                    Projects
                  </Button>
                </Link>
                <Link to="/contact" style={{ color: "#ffffff",textDecoration:'none'}}>
                  <Button variant="outlined" color="white" className={classes["&:active"]} style={{marginLeft: '0.5rem', marginRight:'0.5rem', color:'white'}}>
                    Contact
                  </Button>
                </Link>
              </Grid>
            ) : (
              <>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  <MenuItem onClick={() => handleMenuClick("/")}>Home</MenuItem>
                  <MenuItem onClick={() => handleMenuClick("/skill")}>Skills</MenuItem>
                  <MenuItem onClick={() => handleMenuClick("/project")}>
                    Project
                  </MenuItem>
                  <MenuItem onClick={() => handleMenuClick("/contact")}>
                    Contact
                  </MenuItem>
                </Menu>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);

// <Button
//                   variant="contained"
//                   className={classes.button}
//                   startIcon={<HomeIcon />}
//                   onClick={() => {
//                     handleButton("/");
//                   }}
//                 >
//                   Home
//                 </Button>
//                 <Button
//                   Button
//                   variant="contained"
//                   className={classes.button}
//                   startIcon={<AssignmentIcon />}
//                   onClick={() => {
//                     handleButton("/project");
//                   }}
//                 >
//                   Project
//                 </Button>
//                 <Button
//                   Button
//                   variant="contained"
//                   className={classes.button}
//                   startIcon={<CallIcon />}
//                   onClick={() => {
//                     handleButton("/contact");
//                   }}
//                 >
//                   Contact
//                 </Button>
