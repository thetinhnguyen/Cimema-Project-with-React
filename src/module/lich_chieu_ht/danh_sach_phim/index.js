import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MovieItem from './MovieItem'
import './style.scss'
import {connect} from'react-redux'

class LichChieuPhim extends Component {
    static propTypes = {

    }

    render() {
      const {lichChieuList}=this.props
     
        return (
            <div className="lichchieu-container col-8">
            <div className="lichchieu-list">
              {
                lichChieuList.map((item,index)=><MovieItem lichChieu={item} key={index} /> )
              }
                     

            </div>
          </div>
        )
    }
}
const mapStateToProps=state=>({
  lichChieuList: state.lichChieuHeThong.danhSachPhim
})

export default connect(mapStateToProps,null)(LichChieuPhim)
