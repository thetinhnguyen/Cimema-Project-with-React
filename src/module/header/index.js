import React, { Component } from "react";
import PropTypes from "prop-types";
import './style.scss'
import { NavLink } from "react-router-dom";
import {ScrollToDestination} from '../../Support/index'
import {nameOfLocalStore,DANGKY} from '../../Constant/index'
import NavMobile from "../navmobile";
import {custumNAvMoble} from '../../Support/index'
export class Header extends Component {
  static propTypes = {
    userImg: PropTypes.string
  };
  checkCondition=(check)=>{
    custumNAvMoble('100vw',200)
    if(check===1){
      ScrollToDestination(document.getElementById('show_movies').offsetTop,7)

    }
    else if(check===2){
      ScrollToDestination(document.getElementById('search-movies').offsetTop,11)
    }
    else if(check===3){
      ScrollToDestination(document.getElementById('tintuc').offsetTop,15)
    }

  }
  scrollToDetination=(check)=>{
   
      if(window.location.pathname==='/'){
        this.checkCondition(check);
      }
      else{
        window.location.pathname='/';
        this.checkCondition(check);
      }
      
    
  }
  handleLoging=(index)=>{
    if(index===1){
      localStorage.removeItem(nameOfLocalStore.TaiKhoan)
      window.location.reload()
    }
    else if(index===2){
      window.location.pathname='/login'
    }
    else if(index===3){
      window.location.pathname='/login'
      localStorage.setItem(DANGKY,'abc')
    }
  }
  openNavMoble=()=>{
    custumNAvMoble(0,400)
  }

  render() {
    const {  userImg } = this.props;
    return (
      <header>
      <NavMobile bookMark={this.scrollToDetination} handleLoging={this.handleLoging} />
      <div className="row header_container p-3">
        <div className="col-4 col-sm-3 col-md-3  col-lg-3 header_logo">
          <NavLink to='/'>
          <img
            src="https://123phim.vn/app/assets/img/icons/web-logo.png"
            alt="logo"
          />
          </NavLink>
       
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 header_items">
          <p onClick={()=>this.scrollToDetination(1)}>Lịch Chiếu</p>
          <p onClick={()=>this.scrollToDetination(2)}>Cụm Rạp</p>
          <p onClick={()=>this.scrollToDetination(3)}>Tin Tức</p>
          <p>Ứng Dụng</p>
        </div>
        <div className="col-sm-3 col-md-3 col-lg-3 header_loging">
          <div className="loging">
            <img src={userImg} alt="img-acount" />
            {localStorage.getItem(nameOfLocalStore.TaiKhoan) && <span>{JSON.parse(localStorage.getItem(nameOfLocalStore.TaiKhoan)).taiKhoan}</span>   }
            
            <div className='header_loging_dropdown'>
            {localStorage.getItem(nameOfLocalStore.TaiKhoan) ? <p onClick={()=>this.handleLoging(1)}>Đăng Xuất</p> : <p onClick={()=>this.handleLoging(2)}>Đăng Nhập</p>}
           
            <p  onClick={()=>this.handleLoging(3)}>Đăng Ký</p>
            {localStorage.getItem(nameOfLocalStore.TaiKhoan) &&<NavLink to='/ho-so'><p>Hồ Sơ</p></NavLink>}
         

            </div>
          </div>
        </div>
        <div className="moble_nav  col-8 col-sm-9">
          <i className="fa fa-bars" onClick={this.openNavMoble}  />
        </div>
      </div>
    </header>
   
    );
  }
}

Header.defaultProps = {
  // username: NAMEINIT,
  userImg: "https://123phim.vn/app/assets/img/avatar.png"
};

export default Header;
