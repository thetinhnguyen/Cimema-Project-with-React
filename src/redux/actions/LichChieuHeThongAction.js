
import * as urlQLP from '../../API/QuanLiPhim'
import * as urlQLR from '../../API/QuanLiRap'
import * as urlQLPV from '../../API/QuanLiDatVe'
import * as ActionType from '../constants/ActionType'
import  {getAPI_asyc} from './getAPI_Asyc'

const urlLayDSHeThong=urlQLR.LayThongTinHeThongRap
const methodLayDSHeThong={
    method:'get',
    url: urlLayDSHeThong
}
const getLayDsHeThong=heThongList=>({
    type: ActionType.GET_HE_THONG,
    heThongList
})
export const getLayDsHeThong_asyc=()=>getAPI_asyc(methodLayDSHeThong,getLayDsHeThong)



//
const getLAyDsMovies=moviesList=>({
    type: ActionType.GET_MOVIES_HT,
    moviesList
})
const methodLayDsPhim={
    method: 'get',
    url: urlQLP.LayDanhSachPhim
}
export const getLAyDsMovies_asyc=()=>getAPI_asyc(methodLayDsPhim,getLAyDsMovies)

//
const get_ThongTinLichChieuHeThongRap=thongTinLichChieuHT=>({
    type: ActionType.GET_CHI_TIET_HE_THONGS,
    thongTinLichChieuHT
})
export const getCHiTietHeThongs_asyc=()=>getAPI_asyc({
    method:'get',
    url: urlQLR.LayThongTinLichChieuHeThongRap
},get_ThongTinLichChieuHeThongRap)

//
export const change_HeThong=maHeThongRap=>({
    type: ActionType.CHANGE_HE_THONG,
    maHeThongRap
})
// 
export const change_CumRap=cumRap=>({
    type: ActionType.CHANGE_DANH_SACH_PHIM,
    cumRap
})
//
export const change_Youtube=movie=>({
    type: ActionType.CHANGEYOUTUBE,
    movie
})
//
const get_licChieuMovie=lichChieuChiTietMovie=>({
    type: ActionType.LICHCHIEUPHIMCHITIET,
    lichChieuChiTietMovie
}) 
export const get_licChieuMovie_asyn=(maPhim)=>getAPI_asyc({
    method:'get',
     url:`${urlQLR.LayTHongTinLichChieuCTP}?MaPhim=${maPhim}` 
},get_licChieuMovie)
// 
export const changeLoading=loading=>({
    type: ActionType.CHANGELOADING,
    loading
})
//------------------------
export const initLichChieuCTP=()=>({
    type: ActionType.INITLICHCHIETCTP
})
export const changeHeThongCTP=heThongRap=>({
    type:ActionType.CHANGEHETHONGCTP,
    heThongRap
})
export const changeRapChieu=cumRap=>({
    type: ActionType.CHANGERAPCHIEU,
    cumRap
})
export const changeLoadingCTP=loading=>({
    type: ActionType.CHANGELOADINGCTP,
    loading
})
//--------------phong ve
 const getDanhSachPhongVe=danhSachPhongVe=>({
    type: ActionType.GET_DANHSACHPHONGVE,
    danhSachPhongVe

})

export const getDanhSachPhongVe_asyn=(maLichChieu)=>getAPI_asyc({
    method:'get',
     url:`${urlQLPV.LayDanhSachPhongVe}?MaLichChieu=${maLichChieu}` 
},getDanhSachPhongVe)
export const changeLoadingRapChieu=loading=>({
    type: ActionType.CHANGELOADINGRAPCHIEU,
    loading
})
export const addGheChon=ghe=>({
    type: ActionType.ADDGHE,
    ghe
})
export const removeGhe=ghe=>({
    type: ActionType.REMOVEGHE,
    ghe
})

//  const datVeXemPhim=data=>({
//     type: ActionType.DATVEXEMPHIM,
//     data
// })
// export const datVeXemPhim_asyn=data=>getAPI_asyc({
//     method:'post',
//     url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe`,
//     data: data,
//     headers: { Authorization: "Bearer " + JSON.parse(localStorage.getItem(nameOfLocalStore.TaiKhoan)).accessToken }
// },datVeXemPhim)



export const changeCombo=(combo,value)=>({
    type: ActionType.CHANGECOMBO,
    item: {
        combo,
        value
    }
})
