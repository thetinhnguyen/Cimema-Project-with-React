import {combineReducers} from 'redux'
import moviesReducers from './moviesReducer'
import lichChieuHeThong from './lichChieuHEThongReducer'
import LichChieuCTP from './LichChieuPCTReducer'
import RapChieuPhim from './RapChieuReducer'
const rootReducer=combineReducers({moviesReducers,lichChieuHeThong,LichChieuCTP,RapChieuPhim});
export default rootReducer