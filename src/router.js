import Home from "./page/user/home";
import ChiTietPhim from "./module/ChiTietPhim";
import Login from "./page/user/Login";
import ChiTietLichChieu from "./page/user/ChiTietLichChieuPhim/index";
import HoSo from "./page/HoSo";




export const routeHome=[
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/chitietphim/:maPhim',
        exact: false,
        component: ChiTietPhim
    },
    {
        path: '/login',
        exact: false,
        component: Login
    },
    {
        path: '/chi-tiet-rap-chieu-phim/:maLichChieu',
        exact: false,
        component: ChiTietLichChieu
    },
    {
        path: '/ho-so',
        exact: false,
        component: HoSo
    }
]
