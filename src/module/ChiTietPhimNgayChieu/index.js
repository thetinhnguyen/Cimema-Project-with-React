import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";
import {changeRapChieu} from '../../redux/actions/LichChieuHeThongAction'
export class NgayChieuCTP extends Component {
  handleCumRap=(index)=>{
    this.props.changeRapChieu(index)

  }
  render() {
    const { chiTietPhim, heThongRap,cumRap } = this.props;
    let cumRapChieu;
    if (chiTietPhim.heThongRapChieu) {
      cumRapChieu = [...chiTietPhim.heThongRapChieu[heThongRap].cumRapChieu];
    
    }

    return (
      <div className="NgayChieuCTP">
       
        {cumRapChieu &&
            cumRapChieu.map((item, index) => (
                <div className={cumRap===index ? "NgayChieuCTP_item active" : "NgayChieuCTP_item" } key={index}>
                <h5 onClick={()=>this.handleCumRap(index)}>{item.tenCumRap}</h5>
               
              </div>
             
            ))}
       
      </div>
    );
  }
}
const mapStateToProps = state => ({
  chiTietPhim: { ...state.LichChieuCTP.chiTietPhim },
  heThongRap: state.LichChieuCTP.heThongRap,
  cumRap: state.LichChieuCTP.cumRap
});
const mapDispatchToProp=dispatch=>({
  changeRapChieu: index=>dispatch(changeRapChieu(index))

})

export default connect(mapStateToProps, mapDispatchToProp)(NgayChieuCTP);
