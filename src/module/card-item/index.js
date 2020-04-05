import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";

import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";

import IconButton from "@material-ui/core/IconButton";
import { Typography, Button } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./style.scss";
import Star from "../star/Star";

const useStyles = makeStyles(theme => ({
  root: {
    margin: '1rem'
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  fontsize: {
    fontsize: "20px"
  }
}));

function CardItem(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const {item}=props

  return (
    <div className="showmovies-moble">
    
      {item &&   <Card className={classes.root} >
          <CardMedia
            className={classes.media}
            image={item.hinhAnh}
            title="Paella dish"
          />

          <CardContent>
      <h4>{item.tenPhim}</h4>
            <div className="d-flex justify-content-end">
              <div>
                {Array.from(Array(parseInt(item.danhGia)).keys()).map((item,index)=>
                <Star size='20px' />
                )}
              </div>
            </div>
          </CardContent>
          <CardActions disableSpacing>
            <Button variant="outlined" color="primary">
              <a href={`/chitietphim/${item.maPhim}`} className="text-decoration-none text-secorndary">
                Buy
              </a>
            </Button>

            <IconButton
              className={
                clsx(classes.expand, {
                  [classes.expandOpen]: expanded
                }) + " outline"
              }
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Mô tả:</Typography>
              <Typography paragraph>
                {item.moTa}
              </Typography>
              {`Đánh giá: ${item.danhGia} `}
              <Star />

              <Typography></Typography>
            </CardContent>
          </Collapse>
        </Card>
    }
    </div>
  );
}

export default CardItem;
