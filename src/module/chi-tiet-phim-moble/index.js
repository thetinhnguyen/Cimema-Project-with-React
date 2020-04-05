import React from 'react'
import HedingCTPMoble from '../heading-ctp-moble'
import HeThongRapCTPMoBle from '../he-thong-rap-ctp-moble'
import {connect} from 'react-redux'
 function ChiTietPhimMoble(props) {
    return (
        <div>
            <HedingCTPMoble />
            <HeThongRapCTPMoBle chiTietPhim={props.chiTietPhim} heThongList={props.heThongList} />
        </div>
    )
}
const mapStatesToProps=state=>({
    chiTietPhim: state.LichChieuCTP.chiTietPhim,
    heThongList: state.LichChieuCTP.heThongList
})
export default connect (mapStatesToProps,null) (ChiTietPhimMoble)

