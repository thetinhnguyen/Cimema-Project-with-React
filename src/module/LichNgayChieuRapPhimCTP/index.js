import React, { Component } from "react";
import PropTypes from 'prop-types'
import "./style.scss";
import moment from 'moment'
import {dayOfWeek} from '../../Support/index'
import { NavLink } from "react-router-dom";
import {nameOfLocalStore} from '../../Constant/index'

//key
//value[]
// maLichChieu: "16909"
// maRap: "482"
// tenRap: "Rạp 2"
// ngayChieuGioChieu: "2019-01-01T10:10:00"
// giaVe: 75000
// thoiLuong: 120
const a={
    key : "01/01/2019",
    value:[{
        maLichChieu: "16909",
maRap: "482",
tenRap: "Rạp 2",
ngayChieuGioChieu: "2019-01-01T10:10:00",
giaVe: 75000,
thoiLuong: 120
    }]
}


export class LichNgayChieuRapPhimCTP extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: false
    };
  }
  static propTypes = {
      lichChieu: PropTypes.object

}
componentWillReceiveProps(){
    this.setState({
        display: false
    })
}
  onClick=()=>{
      this.setState({
          display: !this.state.display
      })
  }

  render() {
      const {lichChieu}=this.props;
    return (
      <div className="LichNgayChieuRapPhimCTP">
        <div className="NgayChieu"
        onClick={this.onClick}
        >{lichChieu.key} - {dayOfWeek(moment(lichChieu.key,'DD/MM/YYYY').day())}  </div>

        {
            this.state.display &&    <div className="LichChieu">
            <div className="LichChieu-view">
              <i className="fa fa-clock"></i>
              <span>View Time</span>
            </div>
            <div className="LichChieu-list">
                {lichChieu.value.map((item,index)=>  <NavLink to={localStorage.getItem(nameOfLocalStore.TaiKhoan) ? `/chi-tiet-rap-chieu-phim/${item.maLichChieu}` : '/login' } className="btn btn-light" key={index}>{moment(item.ngayChieuGioChieu).format('HH:MM')} ~ {moment(item.ngayChieuGioChieu).add(item.thoiLuong, 'minutes').format('HH:MM')}</NavLink> )}
            </div>
          </div>
       
        }
      </div>
    );
  }
}
LichNgayChieuRapPhimCTP.defaultProps = {
   lichChieu: {...a}
  };
  

export default LichNgayChieuRapPhimCTP;



