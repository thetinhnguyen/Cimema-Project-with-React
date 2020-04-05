import React, { Component } from 'react'
import ReactStoreIndicator from 'react-score-indicator'
import './style.scss'
import LichChieu from './Lichchieu'
import DanhGia from './Danhgia'
import ThongTin from './ThongTin'
import {connect} from 'react-redux'
import { get_licChieuMovie_asyn,changeLoadingCTP,change_Youtube,getLayDsHeThong_asyc } from '../../redux/actions/LichChieuHeThongAction'
import Star from '../star/Star'
import {ScrollToDestination} from '../../Support/index'
import Hidden from '@material-ui/core/Hidden';
import ChiTietPhimMoble from '../chi-tiet-phim-moble'
export class ChiTietPhim extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             lichChieu: true,
             thongTin: false,
             danhGia: false
        }
    }
    onClick=(name)=>{
        this.setState({
            lichChieu: false,
            thongTin: false,
            danhGia: false,
            [name]: true
        })
    }
    componentDidMount(){
        this.props.changeLoad(true);
        this.props.changeDSHT();
       
        this.props.changeChiTietPhim(this.props.match.params.maPhim)
       
       
    }
    trailer=()=>{
         const {chiTietPhim}=this.props
        this.props.trailer(chiTietPhim)

    }
    handleMuaVe=()=>{
        ScrollToDestination(document.getElementById('LichChiTietPhim').offsetTop,7)

    }
   
    render() {
        const {lichChieu,thongTin,danhGia}=this.state
        const {chiTietPhim}=this.props
        return (
            <div  className=' chiTietPhim '>
                <Hidden smDown >
                <div className=' chiTietPhim ' style={{
                backgroundImage:  `url('${chiTietPhim.hinhAnh}')`}}>
                <div className='over-flay'>
                <div className='container'>
              
                <div className='row chiTietPhim-top pt-5'>
                    <div className='col-7 chiTietPhim-intro d-flex'>
                        <div className='chiTietPhim-intro-img mr-5'>
                        <img src={chiTietPhim ? chiTietPhim.hinhAnh : ''} alt='chitietphim' className='img-fluid' />
                        <div className='trailerMovie'>
                        <i className="fa fa-play" data-toggle="modal" data-target="#modaltrailer" onClick={this.trailer} ></i>
                        </div>
                        </div>
                        <div className='chiTietPhim-intro-chitiet  '>
                            <p>{chiTietPhim && (new Date(chiTietPhim.ngayKhoiChieu)).toLocaleDateString()}</p>
                            <h5>{chiTietPhim && chiTietPhim.tenPhim}</h5>
                            <button className='btn btn-danger' onClick={this.handleMuaVe} >Mua Ve</button>
                        </div>
                    </div>
                    <div className='col-5'>
                        <ReactStoreIndicator value={chiTietPhim.danhGia*10} maxValue={100} />
                      <div className='text-center'>
            {[...Array(chiTietPhim.danhGia)].map((n, i) => (
              <Star selected={true} key={i} size={'20px'} />
            ))}
    
          </div>

                    </div>
                </div>   
                <div className='chiTietPhim-bottom '>
                   <div className='chiTietPhim-bottom-indicater d-flex mt-5 justify-content-center'>
                    <h5 onClick={()=>this.onClick('lichChieu')} className={lichChieu ? 'active-chiTietPhim': '' }>Lịch Chiếu</h5>
                    <h5 onClick={()=>this.onClick('thongTin')} className={thongTin ? 'active-chiTietPhim': '' }>Thông Tin</h5>
                    <h5 onClick={()=>this.onClick('danhGia')} className={danhGia ? 'active-chiTietPhim': '' }>Đánh Giá</h5>    
                    </div>                
                </div>  
                <div className='chiTietPhim-bottom-diplay' id='LichChiTietPhim'>
                    {lichChieu && <LichChieu />}
                    {thongTin && <ThongTin />}
                    {danhGia && <DanhGia />}

                </div>           
            
                </div>
            
            
                </div>
           
              </div>
    

                </Hidden>
               <Hidden mdUp>
                   <ChiTietPhimMoble />
               </Hidden>

      
            </div>
         
        )
    }
}
const mapStateToProp=state=>({
    chiTietPhim: {...state.LichChieuCTP.chiTietPhim}
})

const mapDispatchToProp=dispatch=>({
    changeDSHT: ()=>dispatch(getLayDsHeThong_asyc()),
    changeChiTietPhim: maPhim=> dispatch(get_licChieuMovie_asyn(maPhim)),
    changeLoad: loading=>dispatch(changeLoadingCTP(loading)),
    trailer: movie=>dispatch(change_Youtube(movie))
})

export default connect(mapStateToProp,mapDispatchToProp) (ChiTietPhim)
