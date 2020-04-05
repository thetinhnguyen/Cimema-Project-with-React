import React, { Component } from "react";
import "./style.scss";
import Axios from 'axios'
import Message from "../Message";
import $ from 'jquery'
import {Redirect} from "react-router-dom";
import {DANGKY} from '../../Constant/index'
export class DangKy extends Component {
  constructor(props) {
    super(props)
  
    this.state ={
      form:{
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "GP01",
        maLoaiNguoiDung: "KhachHang",
        hoTen: "",
        
      },
      checkPassword: true,

      message: '',
      success: 'false'
     
    }
  }
  handleHiddenPassword=()=>{
    this.setState(state=>({
      ...state,checkPassword: !state.checkPassword
    }))
  }
  handleForFrorm=(e)=>{
   
    const {name,value}=e.target;
    this.setState(state=>({
      ...state
      ,form:{
        ...state.form,
        [name]: value
      }
    }))
  }
  subMitForm=(e)=>{
    e.preventDefault()
    console.log()
    Axios({
      method: 'POST',
      url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
      data: this.state.form
    }).then(result=>{

   this.setState(prev_state=>{
          return {
           ...prev_state
            , message: 'Đăng ký thành công !'
          }
        },()=>{
          $("#thongbaodangnhap").modal("show")
        })
        setTimeout(()=>{
          $("#thongbaodangnhap").modal("hide")
        window.location.href='/login'
        },800)

    
    }).catch(err=>{
    
   
        this.setState(prev_state=>{
          return {
           ...prev_state
            , message: 'Email hoặc tài khoản đã tồn tại!'
          }
        },()=>{
          $("#thongbaodangnhaptb").modal("show")
        })
    
    })
  }
  
  render() {
    return (
      <div className="dangky">
       {this.state.success && <Redirect to='/login' />}
        <form className='row' onSubmit={this.subMitForm}>
          <div className='col-12 col-md-6'>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" for="nameInput">
              Họ tên
            </label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              placeholder="Nhập họ tên"
              name='hoTen'

              onChange={(e)=>this.handleForFrorm(e)}
            />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Nhập email"
              name='email'
             
              onChange={(e)=>this.handleForFrorm(e)}
            />
          </div>
          <div className="form-group">
            <label for="phone">Số điện thoại</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Nhập số điện thoại"
              name='soDt'
            
              onChange={(e)=>this.handleForFrorm(e)}
            />
          </div>
          </div>
          <div className='col-12 col-md-6'>
          <div className="form-group">
            <label for="acount">Tài Khoản</label>
            <input
              type="text"
              className="form-control"
              id="acount"
              placeholder="Nhập tài khoản"
              name='taiKhoan'
             
              onChange={(e)=>this.handleForFrorm(e)}
            />
          </div>

          <div className="form-group">
            <label for="password">Password</label>
            <input
              type={this.state.checkPassword ? 'password' : 'text'}
              id="password"
              className="form-control"
              placeholder="Nhập password"
              name='matKhau'
            
              onChange={(e)=>this.handleForFrorm(e)}
            />
          </div>
          <div className="form-group">
           
          <input type="checkbox" name='checkPassword' checked={this.state.checkPassword} 
          onChange={this.handleHiddenPassword}
          />
          <label className='ml-1' >Hidden password</label>
    
            
          </div>
          <div className="form-group ">
            <div className='d-flex justify-content-end' width='80%' >
            <button className="btn ">Đăng ký</button>

            </div>
          
            
          </div>
         

          </div>
     
      
         
         
         
         
            {/* <div className="form-group">
            <label htmlFor="exampleInputEmail1">Mã nhóm</label>
            <input
              type="text"
              className="form-control"
            
              placeholder="Nhập tài khoản"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Tài Khoản</label>
            <select class="custom-select" id="inputGroupSelect01">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>{" "}
          </div>
          <button className="btn">Đăng ký</button> */}
      
        </form>
        <Message id='thongbaodangnhap' kind='success' title={this.state.message} />
      <Message id='thongbaodangnhaptb' kind='error' title={this.state.message}  />
    
  
      </div>
    );
  }
}

export default DangKy;



// {
//   "taiKhoan": "abcxyz",
//   "matKhau": "12345",
//   "email": "abc",
//   "soDt": "string",
//   "maNhom": "GP01",
//   "maLoaiNguoiDung": "KhachHang",
//   "hoTen": "string"
// }
// {
  
// email
// "tinh121999@gmail.com"
// hoTen
// "Nguyễn Thế Tình"
// maLoaiNguoiDung
// "KhachHang"
// maNhom
// "GP01"
// matKhau
// "12345"
// soDt
// "123456"
// taiKhoan

// }
