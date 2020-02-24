import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.scss";

import {changeHeThongCTP} from '../../redux/actions/LichChieuHeThongAction'

export class HeThongRapChieuCTP extends Component {
    handleHTR=(index)=>{
        this.props.changeHeThongRap(index)
    }
  render() {
    const { chiTietPhim, dsHeTHongRap,heThongRap } = this.props;
    let HeThongCT = [];
    if (chiTietPhim.heThongRapChieu) {
      HeThongCT = dsHeTHongRap.filter(item => {
        if (
          chiTietPhim.heThongRapChieu.findIndex(
            item1 => item1.maHeThongRap === item.maHeThongRap
          ) > -1
        )
          return item;
      });
    }
   
    return (
      <div className="HeThongRapChieuCTP">
        {HeThongCT &&
          HeThongCT.length > 0 &&
          HeThongCT.map((item, index) => (
            <div className={heThongRap===index ? "HeThongRapChieuCTP_Item active" : "HeThongRapChieuCTP_Item"} key={index} onClick={()=>this.handleHTR(index)} >
              <div className="HeThongRapChieuCTP_Item_img">
                <img src={item.logo} alt="img" />
              </div>
              <div className="HeThongRapChieuCTP_Item_name">
                <p>{item.biDanh.toLocaleUpperCase()}</p>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProp = state => ({
  chiTietPhim: { ...state.LichChieuCTP.chiTietPhim },
  dsHeTHongRap: [...state.LichChieuCTP.heThongList],
  heThongRap: state.LichChieuCTP.heThongRap
});
const mapDispatchToProp=dispatch=>({
    changeHeThongRap: index=>dispatch(changeHeThongCTP(index))

})

export default connect(mapStateToProp, mapDispatchToProp)(HeThongRapChieuCTP);
