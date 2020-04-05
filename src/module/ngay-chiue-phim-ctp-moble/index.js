import React from 'react'
import {locLichChieu,dayOfWeek} from '../../Support/index'
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import {ExpansionPanelSummary,Button} from '@material-ui/core';
import moment from 'moment'
import './style.scss'
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
  red:{
      color: 'red'
  }
}));

export default function NgayChieuCTPMoble(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
 
 
  

  return (
    <div className={classes.root}>
        {
          props.lichChieuPhim && locLichChieu(props.lichChieuPhim).map((item,index)=>
          
          <ExpansionPanel expanded={expanded === `panel${index+1}`} onChange={handleChange(`panel${index+1}`)}
          key={index}
          >
      
          <ExpansionPanelSummary
          >
            <p className={classes.red+ ' pl-3 m-0'}>{item.key} - {dayOfWeek(moment(item.value[0].ngayChieuGioChieu).weekday())}</p>
          

          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
              <div>
              {
                  item.value.map((item1,index1)=>
                  <Button variant="contained" 
                  className='mr-3 mb-2 focus-bottom'
                  key={index1}
                  >
                      <a href={`/chi-tiet-rap-chieu-phim/${item1.maLichChieu}`} className='link' >{moment(item1.ngayChieuGioChieu).format('HH:MM')}</a>
</Button>
                  )
              }
                  
              </div>
             
            

          </ExpansionPanelDetails>
        </ExpansionPanel>
     
          )
        }
    
    </div>
  );
}

