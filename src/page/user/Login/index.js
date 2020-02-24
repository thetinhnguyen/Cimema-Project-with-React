import React, { Component } from 'react'
import DangNhap from '../../../module/DangNhap'
import DangKy from '../../../module/DangKy'
import './style.scss'
import {DANGKY} from '../../../Constant/index'
export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             check: localStorage.getItem(DANGKY) ? 2 : 1
        }
    }
    kindLog=(index)=>{
        this.setState({
            check: index
        })
    }
    componentDidMount(){
        localStorage.removeItem(DANGKY)
    }
    
    render() {
        const {check}=this.state
        return (
            <div className='LoginPage'>
                <div className='LoginPage_kind'>
                 
                   <p className={check===1 ? 'active' : '' } onClick={()=>this.kindLog(1)}>Đăng Nhập</p>
                    <p className={check===2 ? 'active' : '' } onClick={()=>this.kindLog(2)}>Đăng Ký</p>
                   
                </div>
                <div className='LoginPage_item'>
                {check===1 ? <DangNhap /> : <DangKy /> }
                </div>
               


                
            </div>
        )
    }
}

export default Login
