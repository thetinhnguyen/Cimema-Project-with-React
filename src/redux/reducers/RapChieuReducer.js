import * as actionType from "../constants/ActionType";
import {ComBo} from '../../Constant/index'
const findGhe = (dsGhe, ghe) => {
  return dsGhe.findIndex(item => item.maGhe === ghe.maGhe);
};
const initialState = {
  danhSachPhongVe: {},
  loading: false,
  danhSachGheChon: [],
  dsComBo: [...JSON.parse(JSON.stringify(ComBo))]
};

const RapChieuPhim = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CHANGELOADINGRAPCHIEU:
      state.loading = action.loading;
      return { ...state };

    case actionType.GET_DANHSACHPHONGVE:
      state.danhSachPhongVe = { ...action.danhSachPhongVe };
      state.dsComBo=[...JSON.parse(JSON.stringify(ComBo))]
      state.danhSachGheChon=[]
      state.loading = false;
      return { ...state };
    case actionType.ADDGHE:
      state.danhSachGheChon = [...state.danhSachGheChon, { ...action.ghe }];
      return { ...state };
    case actionType.REMOVEGHE:
      const index = findGhe(state.danhSachGheChon, action.ghe);
      if (index > -1) {
        state.danhSachGheChon.splice(index, 1);
      }
      return { ...state };
    case actionType.CHANGECOMBO:
      let temp=state.dsComBo.find(item=>item.macb===action.item.combo.macb)
      temp.quanty=temp.quanty+action.item.value
      return {...state}
  
   
    default:
      return state;
  }
};
export default RapChieuPhim;
