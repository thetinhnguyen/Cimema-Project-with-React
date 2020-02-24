import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import Star from "../../star/Star";
import {connect} from 'react-redux'
import {change_Youtube} from '../../../redux/actions/LichChieuHeThongAction'
import { NavLink } from "react-router-dom";
export class CardMovies extends Component {
  
  static propTypes = {
    movie: PropTypes.object
  };
  display=()=>{
    this.props.change_Youtube(this.props.movie)
  
  }
  render() {
    const { movie } = this.props;
    return (
      <div className="cardmovie">
        <div className="cardmovie__img">
          <img src={movie.hinhAnh} alt="movie" />
        </div>
        <div className="cardmovie__infor">
          <div>
            <NavLink className="btn_readmore btn" to={`/chitietphim/${this.props.movie.maPhim}`} >Read More</NavLink>
            <button
              className="btn_trailer btn"
              data-toggle="modal"
              data-target="#modaltrailer"
              onClick={this.display}
            >
              Trailer
            </button>
          </div>
        </div>
        <div className="cardmovie_service">
          <h5>{movie.tenPhim}</h5>

          <div>
            {[...Array(movie.danhGia)].map((n, i) => (
              <Star selected={true} key={i} />
            ))}
          </div>
        </div>
    
      </div>
    );
  }
}
const mapDispatchToProp=dipsatch=>({
  change_Youtube: movie=>dipsatch(change_Youtube(movie))
})

export default connect(null,mapDispatchToProp) (CardMovies);
