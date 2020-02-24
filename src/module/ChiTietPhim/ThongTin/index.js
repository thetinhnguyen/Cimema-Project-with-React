import React, { Component } from "react";
import "./style.scss";
import { connect } from "react-redux";
export class ThongTin extends Component {
  render() {
    const {chiTietPhim}=this.props;
    return (
      <div className="container thongtinphim">
        {chiTietPhim &&    <div className="row">
        <div className="col-6 heading">
          <h5>Tên phim</h5>
        </div>
        <div className="col-6">
    <p>{chiTietPhim.tenPhim}</p>
        </div>
        <div className="col-6 heading">
          <h5>Ngày khởi chiếu</h5>
        </div>
        <div className="col-6">
    <p>{(new Date(chiTietPhim.ngayKhoiChieu)).toLocaleDateString()}</p>
        </div>
        <div className="col-6 heading">
          <h5>Nội dung</h5>
        </div>
        <div className="col-6">
          <p>
           {chiTietPhim.moTa}
          </p>
        </div>
      </div>
    }
   </div>
     
    );
  }
}
const mapStateToProp = state => ({
  chiTietPhim: state.LichChieuCTP.chiTietPhim
});

export default connect(mapStateToProp, null)(ThongTin);
