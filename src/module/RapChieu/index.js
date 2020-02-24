import React, { Component, Fragment } from 'react'
import './style.scss'
import GheNgoi from '../GheNgoi'
import { connect } from 'react-redux'
import ThanhToan from '../ThanhToan'


export class RapChieuPhim extends Component {
    
    render() {
          const {danhSachPhongVe}=this.props
        return (
            <div className='RapChieuPhim'>
               <div className='RapChieuPhim_chiTiet'>
                 <div className='RapChieuPhim_thongtin'>
                   {danhSachPhongVe.thongTinPhim && <Fragment>
    <h5>{danhSachPhongVe.thongTinPhim.tenCumRap} - {danhSachPhongVe.thongTinPhim.tenRap}</h5>
    <span>{danhSachPhongVe.thongTinPhim.diaChi}</span>
    <small>   {danhSachPhongVe.thongTinPhim.ngayChieu} - {danhSachPhongVe.thongTinPhim.gioChieu} </small>
                     </Fragment>}

                 </div>
            
            <div className='dayghe_manhinh'>
            <div className='manhinh'>
                    

                    </div>
                  <div className='dayGhe'>
                  { danhSachPhongVe.danhSachGhe && danhSachPhongVe.danhSachGhe.map((item,index)=>
                    <GheNgoi ghe={item} key={index} />
                    )}
                  </div>

            </div>
             
             <div className='ghichu'>
                 <div className='ghichu_item'>
                 <GheNgoi color=' red' />
                 <span>Ghế đã được đặt</span>
                 </div>
                 <div className='ghichu_item'>
                 <GheNgoi color=' green' />
                 <span>Ghế chọn</span>

                 </div>
                 <div className='ghichu_item'>
                 <GheNgoi color=' lightskyblue' />
                 <span>Ghế Vip</span>

                 </div>
                 <div className='ghichu_item'>
                     
                 <GheNgoi color=' white' />
                 <span>Ghế thường</span>
                 </div>

                 
              
                
                

             </div>


               </div>
               <div className='RapChieuPhim_thanhtoan'>
                 <ThanhToan />
               </div>
                
            </div>
        )
    }
}
const mapStateToProp=state=>({
  danhSachPhongVe: state.RapChieuPhim.danhSachPhongVe
})

export default connect(mapStateToProp,null) (RapChieuPhim)
