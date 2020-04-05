import React, { Component } from "react";
import "./style.scss";
import Axios from 'axios'
import {nameOfLocalStore} from '../../Constant/index'
import Message from "../Message";
import $ from 'jquery'
export class DangNhap extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            fromValue: {
                taiKhoan: '',
                matKhau: '',
            },
            message: {
              kind: 'error',
              title: 'Vui lòng kiểm tra lại tài khoản hoặc mật khẩu'
            }
        }
    }
    handleInPut=(e)=>{
        const {name,value}=e.target;
        this.setState(state=>({
            fromValue: {
                ...state.fromValue,[name]: value
            }
        }))
    }
    onSubmit=(e)=>{
        e.preventDefault();
        const {fromValue}=this.state
        Axios({
            method: "POST",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            data: fromValue
          })
            .then(result => {
                localStorage.setItem(nameOfLocalStore.TaiKhoan,JSON.stringify(result.data))
                if(JSON.parse(localStorage.getItem(nameOfLocalStore.TaiKhoan)).maLoaiNguoiDung){
                  
                    $("#thongbaodangnhap").modal("show")
                    setTimeout(()=>{
                      $("#thongbaodangnhap").modal("hide")
                      window.history.back()
                    },800)
                  
                  
                }
                else{
                  $("#thongbaodangnhaptb").modal("show")

                }
            })
            .catch(err => {
           
              $("#thongbaodangnhaptb").modal("show")
            });

    }
  render() {
    return (
      <div className="dangnhap">
                <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Tài Khoản</label>
          <input type="text" className="form-control"aria-describedby="emailHelp" placeholder="Nhập tài khoản" name='taiKhoan' onChange={(e)=>this.handleInPut(e)} />
         </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" placeholder="Nhập password" name='matKhau' onChange={(e)=>this.handleInPut(e)} />
        </div>
        <button className="btn">Đăng Nhập</button>
      </form>
      <Message id='thongbaodangnhap' kind='success' title='Đăng nhập thành công' />
      <Message id='thongbaodangnhaptb' kind='error' title='Kiểm tra lại tài khoản hoặc mật khẩu của bạn' />
   </div>
    );
  }
}

export default DangNhap;
