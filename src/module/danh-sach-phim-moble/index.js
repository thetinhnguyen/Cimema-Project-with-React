import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import { Typography, Avatar, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { searchLichChieu } from "../../Support/index";
import { NavLink } from "react-router-dom";
import moment from "moment";
import "./style.scss";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  margin: {
    margin: "0  1rem"
  },
  tenPhim: {
    color: "#b1b1b1"
  }
}));
const findPhim = (moviesList, maPhim) => {
  const hethong = moviesList.find(item => item.maPhim === maPhim);
  return hethong;
};

function DanhSachPhimMoble(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { danhSachPhim, moviesList } = props;

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {danhSachPhim &&
        danhSachPhim.map((item1, index) => (
          <ExpansionPanel
            expanded={expanded === `panel${index + 1}`}
            onChange={handleChange(`panel${index + 1}`)}
            key={item1.maPhim}
          >
            <ExpansionPanelSummary>
              <Avatar
                src={findPhim(moviesList, item1.maPhim).hinhAnh}
                className={classes.margin}
              ></Avatar>
              <Typography className={classes.tenPhim}>
                {item1.tenPhim}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              {item1 &&
                searchLichChieu(item1.lstLichChieuTheoPhim).map(
                  (item2, index) => (<NavLink to={`/chi-tiet-rap-chieu-phim/${item2.maLichChieu}`}
                  className='tagA'
                  key={index}
                  >
                        <Button
                      variant="contained"
                      className="buttonLicChieu mr-2"
                     
                    >
                      {moment(item2.ngayChieuGioChieu).format("HH:MM")}
                    </Button>
                  </NavLink>
                  )
                )}
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
    </div>
  );
}
const mapStatesToProps = state => ({
  moviesList: state.lichChieuHeThong.moviesList
});
export default connect(mapStatesToProps, null)(DanhSachPhimMoble);
