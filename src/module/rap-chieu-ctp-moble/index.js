
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import NgayChieuCTPMoble from '../ngay-chiue-phim-ctp-moble';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
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

export default function RapChieuPCTMoble(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
 
  

  return (
    <div className={classes.root}>
        {
          props.thongTinCumRap && props.thongTinCumRap.map((item,index)=>
          
          <ExpansionPanel expanded={expanded === `panel${index+1}`} onChange={handleChange(`panel${index+1}`)}
          key={index}
          >
      
          <ExpansionPanelSummary
          
          >
            <p>{item.tenCumRap}</p>
          

          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.detail}>
            <NgayChieuCTPMoble lichChieuPhim={item.lichChieuPhim} />
          



          </ExpansionPanelDetails>
        </ExpansionPanel>
     
          )
        }
    
    </div>
  );
}

