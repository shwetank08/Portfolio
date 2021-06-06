import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CodeIcon from '@material-ui/icons/Code';
import { Link } from "react-router-dom";


const useStyles = makeStyles({
  root: {
    height:'60vh', width: '100%',
  },
  media: {
    width: '100%',
    margin: 'auto'
  },
});
const Cards = ({ name, text,photo,URL }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root} elevation={1}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component="img"
            alt="img"
            image={photo}
          />
          <CardContent style={{color: 'black'}}>
            <Typography gutterBottom variant="h5" component="h2" style={{display:'flex',justifyContent: 'center',alignItem:'center',fontfamily: "Montserrat",}}>
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="body2">
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{display:'flex',justifyContent:'center',alignItems:'center '}}>
        <Link to={{ pathname: `${URL}` }} target="_blank" >
          <Button size="small" color="primary">
            <CodeIcon/>
          </Button>
        </Link>

        </CardActions>
      </Card>
    </div>
  );
};

export default Cards;
