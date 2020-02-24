import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import {danhSachCarousel} from '../../Constant/index'
export class Carousel extends Component {
    static propTypes = {
        danhSachCarousel: PropTypes.array
    }
    
    render() {
        const {danhSachCarousel}=this.props
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="2000">
        <ol className="carousel-indicators">
          {danhSachCarousel.map((item,index)=> <li data-target="#carouselExampleIndicators" data-slide-to={index} className={index===0 ? 'active' : ''} key={index} />)}

        </ol>
        <div className="carousel-inner">
            {
                danhSachCarousel.map((item,index)=> 
                <div className={index===0 ? "carousel-item active" : "carousel-item"}key={index}>
                <img className="d-block w-100" src={item}  alt="First slide" />
              </div>
                )
            }
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
        
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
         
        </a>
      </div>
        )
    }
}

Carousel.defaultProps= {
    danhSachCarousel:danhSachCarousel
}

export default Carousel


