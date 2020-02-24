import React, { Component } from 'react'
import './style.scss'
export class DangKy extends Component {
    render() {
        return (
            <div className='dangky'>
                  <form>
          <div className="form-group">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Họ tên</label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Nhập tài khoản"
              />
            </div>
            <label htmlFor="exampleInputEmail1">Tài Khoản</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Nhập tài khoản"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Nhập password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Nhập tài khoản"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Số điện thoại</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Nhập tài khoản"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Mã nhóm</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
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
          <button className="btn">Đăng ký</button>
        </form>
      
            </div>
        )
    }
}

export default DangKy
