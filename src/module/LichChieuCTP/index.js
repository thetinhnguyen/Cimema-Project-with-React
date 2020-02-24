import React, { Component } from 'react'
import './style.scss'
import NgayChieuCTP from '../ChiTietPhimNgayChieu'
import HeThongRapChieuCTP from '../ChiTietPhimHeThongRap'
import RapChieuCTP from '../ChiTietPhimRapChieu'
import {connect} from 'react-redux'
import {initLichChieuCTP} from '../../redux/actions/LichChieuHeThongAction'
export class LicChieuPhimCTP extends Component {
    componentDidMount(){
        this.props.initModule()
    }
    render() {
        return (
            <div className='LicChieuCTP container'>
              
                   
                    <div className='LicChieuCTP-left'>
                    <HeThongRapChieuCTP />
                    </div>

                   <div className='LicChieuCTP-right'>
                   <NgayChieuCTP />
                   <RapChieuCTP />

                   </div>
                  


            
                
            </div>
        )
    }
}
const mapDispatchToProp=dispatch=>({
    initModule: ()=>dispatch(initLichChieuCTP())
})

export default connect(null,mapDispatchToProp) (LicChieuPhimCTP)
