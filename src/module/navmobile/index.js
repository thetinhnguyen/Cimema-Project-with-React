import React, { Component } from "react";
import "./style.scss";
import { nameOfLocalStore } from "../../Constant/index";
import { custumNAvMoble } from "../../Support/index";
export class NavMobile extends Component {
  handleClose = () => {
    custumNAvMoble("100vw", 400);
  };
  render() {
    return (
      <div className="nav-mobile">
        <i
          class="fa fa-angle-right"
          id="faNavmoble"
          onClick={this.handleClose}
        ></i>
        <p onClick={() => this.props.bookMark(1)}>Lịch Chiếu</p>
        <p onClick={() => this.props.bookMark(2)}>Cụm Rạp</p>
        <p onClick={() => this.props.bookMark(3)}>Tin Tức</p>
        <p>Ứng Dụng</p>
        {localStorage.getItem(nameOfLocalStore.TaiKhoan) && <p>Hồ Sơ</p>}
    
        {localStorage.getItem(nameOfLocalStore.TaiKhoan) ? (
          <p onClick={() => this.props.handleLoging(1)}>Đăng Xuất</p>
        ) : (
          <p onClick={() => this.props.handleLoging(2)}>Đăng Nhập</p>
        )}
        </div>
    );
  }
}

export default NavMobile;
