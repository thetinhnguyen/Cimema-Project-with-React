import React, { Component, Fragment } from 'react'
import './style.scss'
import { connect } from 'react-redux'
import {nameOfLocalStore} from '../../Constant/index'
//import {datVeXemPhim_asyn} from '../../redux/actions/LichChieuHeThongAction'
import $ from 'jquery'
import {callAPI} from '../../Support/index'
import Message from '../Message'
import Combo from '../Combo'
export class ThanhToan extends Component {
  
    tienGhe=(dsghe)=>{
        if(dsghe.length<1)
        return 0
       
        return dsghe.reduce((acumorlator,currentValue)=>acumorlator+currentValue.giaVe,0)
    }
    tienCombo=(dsCombo)=>{
        if(dsCombo.length<1)
        return 0
       
        return dsCombo.reduce((acumorlator,currentValue)=>acumorlator+currentValue.price*currentValue.quanty,0)
    }
    datVeXemPhim=()=>{
        const {danhSachPhongVe,danhSachGheChon}=this.props
        if(danhSachGheChon.length>0){
           
            const danhSachVe=danhSachGheChon.map(item=>({maGhe: item.maGhe,giaVe: item.giaVe}))
            let data={maLichChieu: danhSachPhongVe.thongTinPhim.maLichChieu,danhSachVe: [...danhSachVe],taiKhoanNguoiDung:JSON.parse(localStorage.getItem(nameOfLocalStore.TaiKhoan)).taiKhoan }
            callAPI(
               { method:'post',
                url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe`,
                data: data,
                headers: { Authorization: "Bearer " + JSON.parse(localStorage.getItem(nameOfLocalStore.TaiKhoan)).accessToken }},
                (data)=>{
                    $("#thongbaomuavetc").modal("show")
                    setTimeout(()=>
                    
                   {
                
                    window.location.pathname='/'},800)
                    
                },(err)=>{
                    $("#thongbaomuavetb").modal("show")
                    setTimeout(()=>window.location.pathname='/',800)
                }
            )
        }

    }
    diplayCombo=()=>{
        // $('#modal-combos').animate({
        //    width: 'toggle'
        // })
        $('#modal-combos').slideToggle();
    }
   componentDidMount(){
    callAPI(
        { method:'post',
         url: `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
         data:
         {taiKhoan: JSON.parse(localStorage.getItem(nameOfLocalStore.TaiKhoan)).taiKhoan},
        //  headers: { Authorization: "Bearer " + JSON.parse(localStorage.getItem(nameOfLocalStore.TaiKhoan)).accessToken }
    },
         (data)=>{
             console.log(data)
         },(err)=>{
            

            console.log(err)
         }
     )

   }
    
    render() {
        const {danhSachPhongVe,danhSachGheChon,dsComBo}=this.props
        const active=danhSachGheChon.length>0 ? 'thanhtoan_bottom active' : 'thanhtoan_bottom'
        
        return (
            <Fragment>
                   <div className='thanhtoan'>
                <div className='thanhtoan_top'>
                <div className='thanhtoan_tongtien'>
                    <h5>{(danhSachGheChon  && dsComBo ) ? `${this.tienGhe(danhSachGheChon)+ this.tienCombo(dsComBo)} đ` : '0 đ'}</h5>
                </div>
                <div className='thanhtoan_thongtinlc'>
        {danhSachPhongVe.thongTinPhim &&
        <Fragment>
             <p>{danhSachPhongVe.thongTinPhim.tenPhim}</p>
             <span>{`${danhSachPhongVe.thongTinPhim.ngayChieu} - ${danhSachPhongVe.thongTinPhim.gioChieu}`  } </span>
                    <p>{`${danhSachPhongVe.thongTinPhim.tenCumRap} - ${danhSachPhongVe.thongTinPhim.tenRap}` }</p>

        </Fragment>
        }
                  
                </div>
                <div className='content_thanhtoan vitrighe'>
                    <div className='item1 ghechon'>
                        <p>Ghế</p>
    {danhSachGheChon.map((item,index)=><p key={index}>{item.tenGhe}</p>)}
                    </div>
                    <div className='item2 tien-ghe'>
    <span>{(danhSachGheChon && danhSachGheChon.length>0) ? `${this.tienGhe(danhSachGheChon)} đ` : '0 đ'}</span>
                    </div>
                </div>
                <div className='content_thanhtoan combo' >
                    <div className='item1 choncombo' onClick={this.diplayCombo}>
                        <img src='https://mcinox.cgv.vn/cinox/atomicDownload/downloadFile.fo?ATTCH_NO=203826&SEQ_NO=304112' alt='abc'/ >
                        <p  >Chọn combo</p>
                    </div>
                    <div className='item2 tiencombo'>
                        <span >{(dsComBo && dsComBo.length>0) ? `${this.tienCombo(dsComBo)} đ` : '0 đ'}</span>

                    </div>

                </div>
                <div className='email'>
                    <p>Email</p>
    <p>{localStorage.getItem(nameOfLocalStore.TaiKhoan) && JSON.parse(localStorage.getItem(nameOfLocalStore.TaiKhoan)).email}</p>

                </div>
                
            </div>
      <div className={ active } onClick={this.datVeXemPhim}>
          <h5 >ĐẶT VÉ</h5>
        
      </div>
      <div className='modal-combos' id='modal-combos'>
          <div className='combos'>
              <div className='combo_heading combo_thuong'>
                <h5>COMBO</h5>
              {dsComBo && dsComBo.slice(0,4).map((item,index)=><Combo key={index} combo={{...item}} />)}



              </div>
              <div className='combo_heading combo_dacbiet'>
                <h5>SPECIAL COMBO</h5>
              {dsComBo && dsComBo.slice(4).map((item,index)=><Combo key={index} combo={{...item}} />)}



              </div>

           


          </div>
          </div>
       </div>
       

       <Message id='thongbaomuavetc' kind='success' title='Đăng vé thành công' />
      <Message id='thongbaomuavetb' kind='error' title='Vé thất bại' />
   
            </Fragment>
    
            )
    }
}
const mapStateToProp=state=>({
    danhSachPhongVe: state.RapChieuPhim.danhSachPhongVe,
    danhSachGheChon: [...state.RapChieuPhim.danhSachGheChon],
    dsComBo: [...state.RapChieuPhim.dsComBo]
})

export default connect(mapStateToProp,null) (ThanhToan)
