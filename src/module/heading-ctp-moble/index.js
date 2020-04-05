import React,{useState} from "react";
import "./style.scss";
import YouTube from 'react-youtube';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux'
import moment from 'moment'
import Star from "../star/Star";
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
      color: 'red'
  },
  span: {
      fontSize: '12px',
      color:'silver'
  }
}));
 function HedingCTPMoble(props) {
    const classes = useStyles();
    const [open,setOpen]=useState(false)
    const opts = {
        height: '200px',
        width: '100%',
        playerVars: { 
          autoplay: 1
        }
      };
    const hanldOpenYoutube=()=>{
        setOpen(true)
    }
    const {chiTietPhim}=props
    const youtube_parser=(url)=>{
      var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
      var match = url.match(regExp);
      return (match&&match[7].length===11)? match[7] : false;
  }
    
  return (
    <div className="hedding">
      <div className="hedding-content">

    {
        open ? <YouTube
        videoId={youtube_parser(chiTietPhim.trailer)}
        opts={opts}
      /> :
        <div className="hedding-img">
          <img
            src={chiTietPhim.hinhAnh}
            alt="abc"
            className="img-fluid"
          />
          <div className="hedding-play">

            <i class="fa fa-play" onClick={hanldOpenYoutube}></i>
          </div>
        </div>
    }
      




      </div>
    <div className='hedding-intro'>
    <div className={classes.root}>
      <ExpansionPanel defaultExpanded={true}>
        <ExpansionPanelSummary
        
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >

  <h3 className={classes.heading}>{chiTietPhim.tenPhim}</h3>
  <span className={classes.span}>{moment(chiTietPhim.ngayKhoiChieu).format('DD-MM-YYYY')}</span>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails class='flex-none'>
          <p>
              {chiTietPhim.moTa}
          </p>
          <p>
              {Array.from(Array(chiTietPhim.danhGia).keys()).map((item,index)=>
              <Star key={index} />
              
              )}
          </p>
        </ExpansionPanelDetails>
      </ExpansionPanel>
   
    </div>
    </div>
    </div>
  );
}
const mapStatesToProps=state=>({
  chiTietPhim: state.LichChieuCTP.chiTietPhim

})
export default connect(mapStatesToProps,null) (HedingCTPMoble)