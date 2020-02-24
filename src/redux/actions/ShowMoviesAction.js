import * as Type from '../constants/ActionType'
import * as urlAPI from '../../API/QuanLiPhim'
import {getAPI_asyc} from './getAPI_Asyc'
const urlLayDanhSachPhim=urlAPI.LayDanhSachPhim;
const method={
    method: 'get',
    url:urlLayDanhSachPhim
}
const getMovies=movies=>({
    type: Type.GET_MOVIES,
    movies
})
export const getMovies_asyc=()=>getAPI_asyc(method,getMovies)

export const showMovies=check=>({
    type: Type.SHOW_MOVIES,
    check
})
