import React, { Component, Fragment } from 'react'
import Carousel from '../../module/Carousel'
import  ShowMovies  from '../../module/show_movies'
import  SerchLichChieuHeThong  from '../../module/lich_chieu_ht'

export class Home extends Component {
    
    render() {
        return (
          <Fragment>
              <Carousel />
              <ShowMovies />
              <SerchLichChieuHeThong />
          </Fragment>
        )
    }
}


export default  Home
