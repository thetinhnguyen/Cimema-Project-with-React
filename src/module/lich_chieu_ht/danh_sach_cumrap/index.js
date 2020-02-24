import React, { Component } from 'react'
import './style.scss'
import {connect} from 'react-redux'
import {change_CumRap} from '../../../redux/actions/LichChieuHeThongAction'
import PropTypes from 'prop-types'

export class CumRapList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            choose:0
        }
    }
    static propTypes = {
      cumrap_list: PropTypes.object,
      cumRap: PropTypes.func
    }
    componentWillReceiveProps(propsNex){
      if(JSON.stringify(this.props.cumRapList)!==JSON.stringify(propsNex.cumRapList)){
        this.setState({choose:0})
      }
    }

    onClick=(index,item)=>{
        this.setState({
            choose: index
        })
        this.props.cumRap(item)
         
    }

    render() {
        const {choose}=this.state;
        const {lstCumRap}=this.props.cumRapList
        return (
            <div className="list-cumrap-contain col-4">
            <div className="list-cumrap ">

                {lstCumRap && lstCumRap.map((item,index)=>
                  <div className={choose===index ? 'cumrap cumrap-active': 'cumrap'} key={index} 
                  onClick={()=>this.onClick(index,item)}>

                  <div className="cumrap-img">
                    <img src='https://s3img.vcdn.vn/123phim/2018/09/bhd-star-vincom-thao-dien-15379553942188.jpg' alt={item.tenCumRap} />
                  </div>
                  <div className="cumrap-chitiet ">
                    <h5>{item.tenCumRap}</h5>
                    <p>{item.diaChi}</p>
                  </div>
                </div>
                )}
            
             
               
            </div>
          </div>
        )
    }
}
const mapStateToProps=state=>({
  cumRapList: {...state.lichChieuHeThong.thongTinLichChieuCurent}
})
const mapDispatchToProp=dispatch=>({
  cumRap: (cumRap)=>dispatch(change_CumRap(cumRap))
})

export default connect(mapStateToProps,mapDispatchToProp) (CumRapList)
