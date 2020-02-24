import * as actionType from "../constants/ActionType";
const initialState = {
  heThongList: [],
  moviesList: [],
  thongTinLichChieuHT: [],
  thongTinLichChieuCurent: {},
  danhSachPhim: [],
  youtube: "v2VIFCHSdrM",
  loading: false
};
function getId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
}
const lichChieuHeThong = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_HE_THONG:
      state.heThongList = [...action.heThongList];
      return { ...state };

    case actionType.GET_MOVIES_HT:
      state.moviesList = [...action.moviesList];
      return { ...state };
    case actionType.GET_CHI_TIET_HE_THONGS:
      state.thongTinLichChieuHT = [...action.thongTinLichChieuHT];
      state.thongTinLichChieuCurent = state.thongTinLichChieuHT[0];
      state.danhSachPhim = [
        ...state.thongTinLichChieuCurent.lstCumRap[0].danhSachPhim
      ];

      return { ...state };
    case actionType.CHANGE_HE_THONG:
      state.thongTinLichChieuCurent = state.thongTinLichChieuHT.find(
        item => item.maHeThongRap === action.maHeThongRap
      );
      state.danhSachPhim = [
        ...state.thongTinLichChieuCurent.lstCumRap[0].danhSachPhim
      ];
      return { ...state };
    case actionType.CHANGE_DANH_SACH_PHIM:
      state.danhSachPhim = [...action.cumRap.danhSachPhim];
      return { ...state };
    case actionType.CHANGEYOUTUBE:
      state.youtube = getId(action.movie.trailer);
      return { ...state };
    case actionType.CHANGELOADING:
      state.loading = action.loading;
      return { ...state };
    default:
      return state;
  }
};
export default lichChieuHeThong;
