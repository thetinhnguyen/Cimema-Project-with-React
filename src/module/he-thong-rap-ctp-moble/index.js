import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import {Avatar} from '@material-ui/core';
import RapChieuPCTMoble from '../rap-chieu-ctp-moble';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  detail:{
    padding: 0
  }
}));

export default function HeThongRapCTPMoBle(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const findAnhHeThong=(maHeThongRap)=>{
    return props.heThongList.find(item=> item.maHeThongRap===maHeThongRap)
  }

  return (
    <div className={classes.root}>
        {
          props.chiTietPhim.heThongRapChieu && props.chiTietPhim.heThongRapChieu.map((item,index)=>
          
          <ExpansionPanel expanded={expanded === `panel${index+1}`} onChange={handleChange(`panel${index+1}`)}
          key={index}
          >
      
          <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          
          >
            <Avatar src={findAnhHeThong(item.maHeThongRap).logo}  />
          

          </ExpansionPanelSummary>
          <ExpansionPanelDetails
          className={classes.detail}
          >
            <RapChieuPCTMoble thongTinCumRap={item.cumRapChieu} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
     
          )
        }
    
    </div>
  );
}
