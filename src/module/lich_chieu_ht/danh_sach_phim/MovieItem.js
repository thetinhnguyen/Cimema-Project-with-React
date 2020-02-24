import React, { Component } from "react";
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import Star from "../../star/Star";
import {locLichChieu} from '../../../Support/index'
import moment from  'moment'
import { NavLink } from "react-router-dom";
import {nameOfLocalStore} from '../../../Constant/index'

export class MovieItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      choose: false
    };
  }
  static propTypes = {
    lichChieu: PropTypes.object

  }
  componentWillReceiveProps(){
    this.setState({
      choose: false
    })
  }
  findMovie = (maPhim) => {
    const { moviesList } = this.props;
    return moviesList.find(item => item.maPhim === maPhim);
  };
  render() {
    const {lichChieu}=this.props
    let movie;
    const {lstLichChieuTheoPhim}=lichChieu
    const chieuTheoNgay=locLichChieu(lstLichChieuTheoPhim)
   if(lichChieu){
      movie  = this.findMovie(lichChieu.maPhim);
   }
   
    return (
      <div className="lichchieu-item">
        {movie && (
          <div
            className="lichchieu-movie"
            onClick={() =>
              this.setState(staetprev => ({
                choose: !staetprev.choose
              }))
            }
          >
            <div className="lichchieu-img m-0">
              <img src={movie.hinhAnh} alt="" />
            </div>
            <div className="lichchieu-right ">
              <div className="movie-name ">
                <p >{`${movie.tenPhim}: `}</p>
                <p>{movie.moTa}</p>
              </div>
              <div className="lichchieu-danhgia ">
                Đánh giá:
                {[...Array(movie.danhGia)].map((n, i) => (
                  <Star selected={true} key={i} />
                ))}
              </div>
            </div>
          </div>
        )}

        {this.state.choose && (
          <div className="view-time">
            <div className="view-clock">
              <i className="fa fa-clock" />
              <span>VIEWING TIMES</span>
            </div>
            <div className="view-show">

              {chieuTheoNgay[0].value.map((item,index)=>
  <NavLink type="button" className="btn btn-light mb-3" key={index} to={localStorage.getItem(nameOfLocalStore.TaiKhoan) ?`/chi-tiet-rap-chieu-phim/${item.maLichChieu}` : '/login'} >{moment(item.ngayChieuGioChieu).format('HH:MM')}</NavLink>
             
  
             )}
            
            </div>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProp = state => ({
  moviesList: state.lichChieuHeThong.moviesList
});

export default connect(mapStateToProp, null)(MovieItem);
