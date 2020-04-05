import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import {Typography} from '@material-ui/core';
import DanhSachPhimMoble from '../danh-sach-phim-moble';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  detail:{
      padding: 0
  }

}));
// const findHeThong=(heThongList,maHeThongRap)=>{
//     const hethong=heThongList.find(item=> item.maHeThongRap===maHeThongRap)
//     return hethong.logo
// }

export default function RapChieuMoble(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const {lstCumRap}=props

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
 

  return (
    <div className={classes.root}>
      
                    {lstCumRap && lstCumRap.map((item1,index)=>
                     <ExpansionPanel expanded={expanded === `panel${index+1}`} 
                     onChange={handleChange(`panel${index+1}`)}
                     key={item1.maCumRap}
                     >
                     <ExpansionPanelSummary >
                       <Typography>{item1.tenCumRap}</Typography>
                          </ExpansionPanelSummary>
                     <ExpansionPanelDetails className={classes.detail}>
                         <DanhSachPhimMoble danhSachPhim={item1.danhSachPhim} />
                    
                     </ExpansionPanelDetails>
                   </ExpansionPanel>
           
                        
                        )}


        
        
    </div>
  );
}


