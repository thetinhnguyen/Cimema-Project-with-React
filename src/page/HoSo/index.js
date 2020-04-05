import React, { useEffect, useState } from "react";
import "./style.scss";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
  table1:{
      maxHeight: 400
  }
});




export default function HoSo(props) {
  const [thongTin, setthongTin] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    if (localStorage.getItem("TaiKhoan")) {
      Axios({
        method: "POST",
        url:
          "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
        data: {
          taiKhoan: JSON.parse(localStorage.getItem("TaiKhoan")).taiKhoan,
        },
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("TaiKhoan")).accessToken
          }`,
        },
      })
        .then((res) => {
          setthongTin(res.data);
        })
        .catch((err) => {
          props.history.push("/login");
          console.log(err);
        });
    } else {
      props.history.push("/login");
    }
  }, []);
  
  return (
    <div className="ho-so container">
      <div className="row thongtin ">
        <div className="col-5">
          <h4>Thông tin cá nhân</h4>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="caption table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Mục</TableCell>
                  <TableCell align="center">Thông Tin</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">Tài Khoản</TableCell>
                  <TableCell align="center">
                    {thongTin && thongTin.taiKhoan ? thongTin.taiKhoan : ""}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">Họ Tên</TableCell>
                  <TableCell align="center">
                    {thongTin && thongTin.hoTen ? thongTin.hoTen : ""}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">
                    {thongTin && thongTin.email ? thongTin.email : ""}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">Điện Thoại</TableCell>
                  <TableCell align="center">
                    {thongTin && thongTin.soDT ? thongTin.soDT : ""}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      
      </div>
      <div className='ds_ve-boc row justify-content-end'>
      <div className="col-12 ds_ve ">
          <h4>Thông tin đặt vé</h4>
          <TableContainer component={Paper}  className={classes.table1}>
            <Table aria-label="caption table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Tên Phim</TableCell>
                  <TableCell align="center">Giá Vé</TableCell>
                  <TableCell align="center">Thời Lượng</TableCell>
                  <TableCell align="center">Ngày Đặt</TableCell>
                  <TableCell align="center">Số lượng ghế</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                  {
                      thongTin && thongTin.thongTinDatVe.map((item,index)=>
                        <TableRow key={index}>
                        <TableCell align="center">{item.tenPhim}</TableCell>
                        <TableCell align="center">{item.giaVe}</TableCell>
                        <TableCell align="center">{item.thoiLuongPhim}</TableCell>
                        <TableCell align="center">{(new Date(item.ngayDat)).toLocaleString()}</TableCell>
                        <TableCell align="center">{item.danhSachGhe.length}</TableCell>
                      </TableRow>

                      )
                  }
               
              </TableBody>
            </Table>
          </TableContainer>
    


      </div>

      </div>
    </div>
  );
}
