import React, { Component } from 'react'

import './style.scss'
import RapChieuPhim from '../../../module/RapChieu'
import {changeLoadingRapChieu,getDanhSachPhongVe_asyn} from '../../../redux/actions/LichChieuHeThongAction'
import { connect } from 'react-redux'
import {nameOfLocalStore} from '../../../Constant/index'

export class ChiTietLichChieu extends Component {
 
    componentDidMount(){
        if(!localStorage.getItem(nameOfLocalStore.TaiKhoan)){
            window.location.pathname='/login'
        }
        this.props.changeLoad(true)
        this.props.changeDsPhongVe(this.props.match.params.maLichChieu)
    }
    render() {
        return (
            <div className='ChiTietLichChieu'>
                <RapChieuPhim />           
            </div>
        )
    }
}
const mapDispathToProp=dispatch=>({
    changeLoad: loading=>dispatch(changeLoadingRapChieu(loading)),
    changeDsPhongVe: maLichChieu=>dispatch(getDanhSachPhongVe_asyn(maLichChieu))
})

export default connect(null,mapDispathToProp) (ChiTietLichChieu)
