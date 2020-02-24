import * as actionType from '../constants/ActionType'

const initialState={
    chiTietPhim:{},
    heThongRap: 0,
    cumRap: 0,
    heThongList: [],
    loading: false
}
const LichChieuCTP=(state=initialState,action)=>{
    switch(action.type){
        case actionType.INITLICHCHIETCTP:
            state.heThongRap=0
            state.cumRap=0
            return {...state}
        case actionType.CHANGELOADINGCTP:
            state.loading=action.loading
            return {...state}
            case actionType.GET_HE_THONG:
                state.heThongList = [...action.heThongList];
                return { ...state };
        case actionType.LICHCHIEUPHIMCHITIET:
            
            state.chiTietPhim= {...action.lichChieuChiTietMovie};
            state.loading=false
            return {...state}

        case actionType.CHANGEHETHONGCTP:
            state.heThongRap=action.heThongRap
            state.cumRap=0
            return {...state}
        case actionType.CHANGERAPCHIEU:

            state.cumRap=action.cumRap
            return {...state}
       
        default:
            return state

    }
}
export default LichChieuCTP