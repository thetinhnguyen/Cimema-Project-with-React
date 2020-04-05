import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import IconButton from '@material-ui/core/IconButton';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
const useStyles = makeStyles({
  root: {
    height: 300,
    marginBottom: '1rem'
  },
  media: {
    height: 140,
  },
});

export default function TinTucItem(props) {
  const classes = useStyles();
  const {img,title}=props
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
        />
        <CardContent>
         
         
                     <p> {title}</p>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
      <IconButton >
          <ThumbUpAltIcon />
        </IconButton>
        <IconButton >
          <ChatBubbleOutlineIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
