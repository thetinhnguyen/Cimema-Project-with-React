import React, { Component, Fragment } from 'react'
import Carousel from '../../module/Carousel'
import  ShowMovies  from '../../module/show_movies'
import  SerchLichChieuHeThong  from '../../module/lich_chieu_ht'
import TinTuc from '../../module/tin-tuc'


export class Home extends Component {
    
    render() {
        return (
          <Fragment>
              <Carousel />
              <ShowMovies />
              <SerchLichChieuHeThong />
              <TinTuc />
            
           
          </Fragment>
        )
    }
}


export default  Home
