import React, { Component } from 'react'
import './style.scss'
import {connect} from 'react-redux'
import {locLichChieu} from '../../Support/index'
import LichNgayChieuRapPhimCTP from '../LichNgayChieuRapPhimCTP';

export class RapChieuCTP extends Component {
    
    render() {
        const {chiTietPhim,heThongRap,cumRap}=this.props;
        let licChieuLocTheoNgay=[];
        if(chiTietPhim.heThongRapChieu){
            // console.log(locLichChieu(chiTietPhim.heThongRapChieu[heThongRap].cumRapChieu[cumRap].lichChieuPhim))
            licChieuLocTheoNgay=locLichChieu(chiTietPhim.heThongRapChieu[heThongRap].cumRapChieu[cumRap].lichChieuPhim);
        }
        return (
            <div className='RapChieuCTP'>
                {
                    licChieuLocTheoNgay && licChieuLocTheoNgay.length>0 && licChieuLocTheoNgay.map((item,index)=> <LichNgayChieuRapPhimCTP lichChieu={item} key={index}  />)
                }
                <div >

                </div>
            
                
            </div>
        )
    }
}
const mapStateToProp=state=>({
    chiTietPhim: {...state.LichChieuCTP.chiTietPhim},
    heThongRap: state.LichChieuCTP.heThongRap,
    cumRap: state.LichChieuCTP.cumRap
})

export default connect(mapStateToProp,null) (RapChieuCTP)
