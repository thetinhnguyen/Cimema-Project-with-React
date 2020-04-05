import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import {Typography,Avatar} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {connect} from 'react-redux'
import RapChieuMoble from '../rap-chieu-moble/index'
import './style.scss'
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
    fontWeight: 'bold'
  },
  detail:{
    padding: 0
}
}));
const findHeThong=(heThongList,maHeThongRap)=>{
    const hethong=heThongList.find(item=> item.maHeThongRap===maHeThongRap)
    return hethong.logo
}

function SeachLichChieuHeThongMoble(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const {thongTinLichChieuHT,heThongList}=props

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
 

  return (
    <div className={classes.root}>
        {
            thongTinLichChieuHT && thongTinLichChieuHT.map((item,index)=>
                <ExpansionPanel expanded={expanded === `panel${index+1}`} 
                onChange={handleChange(`panel${index+1}`)}
                key={index}
                >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                
                 
                >
                  <Typography className={classes.heading}><Avatar alt="Remy Sharp" src={findHeThong(heThongList,item.maHeThongRap)} /></Typography>
        <Typography className={classes.secondaryHeading}>{item.tenHeThongRap.toUpperCase()}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.detail}>
                   <RapChieuMoble lstCumRap={item.lstCumRap} />

                </ExpansionPanelDetails>
              </ExpansionPanel>
        
        
                
                )
        }
    </div>
  );
}
const mapPropsToStates=state=>({
    thongTinLichChieuHT: state.lichChieuHeThong.thongTinLichChieuHT,
    heThongList: state.lichChieuHeThong.heThongList
})

export default connect(mapPropsToStates,null) (SeachLichChieuHeThongMoble)