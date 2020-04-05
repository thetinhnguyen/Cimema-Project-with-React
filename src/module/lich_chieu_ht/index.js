import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import {connect} from 'react-redux'
import {getLayDsHeThong_asyc,getLAyDsMovies_asyc,getCHiTietHeThongs_asyc} from '../../redux/actions/LichChieuHeThongAction'

import HeThongList from './danh_sach_ht/index'
import CumRapList from './danh_sach_cumrap/index'
import LichChieuPhim from './danh_sach_phim/index'
import Hidden from '@material-ui/core/Hidden';
import SeachLichChieuHeThongMoble from '../seach-lich-chieu-ht-moble/index'
export class SerchLichChieuHeThong extends Component {
    static propTypes = {
        layDanhSachHeThong:PropTypes.func,
        layDanhSachPhim: PropTypes.func
    }
    componentDidMount(){
        this.props.layDanhSachHeThong();
        this.props.layDanhSachPhim();
        this.props.layThongTinLichChieuCuaHeThong();
    }
    render() {
        return (
         <div id='search-movies'>
              <Hidden smDown>
                       <div className='container search-movies' >


<HeThongList />
                <div className='row '>
                    <CumRapList />
                    <LichChieuPhim />
                </div>
                </div>
             

                </Hidden>
                <Hidden mdUp>
                   <SeachLichChieuHeThongMoble />

                </Hidden>

         </div>
               
              

                
          
        )
    }

}

const mapDispatchToProp=dispatch=>({
    layDanhSachPhim: ()=>dispatch(getLAyDsMovies_asyc()),
    layDanhSachHeThong:()=>dispatch(getLayDsHeThong_asyc()),
    layThongTinLichChieuCuaHeThong: ()=>dispatch(getCHiTietHeThongs_asyc())
    
})

export default connect(null,mapDispatchToProp)  (SerchLichChieuHeThong)
