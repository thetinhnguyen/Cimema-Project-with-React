import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {change_HeThong} from '../../../redux/actions/LichChieuHeThongAction'
import './style.scss'

export class HeThongList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            choose: 0
        }
    }
    static propTypes={
        heThong_list: PropTypes.array
    }
    componentDidMount(){

    }
    onClick=(index,item)=>{
        this.setState({
            choose: index
        })
        this.props.change_HeThong(item.maHeThongRap)
    }
    
    render() {
        const {heThong_list}=this.props
        const {choose}=this.state
        return (
            <div className="cinema-systems">
            {heThong_list.map((item,index)=>
              <div className={index===choose ?'cinema-system active-system': 'cinema-system'} key={index} 
              onClick={()=>this.onClick(index,item)}
              >
              <img src={item.logo} alt={item.biDanh}   />
            </div>
            
            )}
          
          </div>
        )
    }
}
const mapToProps=state=>({
  heThong_list: [...state.lichChieuHeThong.heThongList]
})
const mapDispatchToProps=dispatch=>({
    change_HeThong:(maHeThong)=>dispatch(change_HeThong(maHeThong))
})

export default connect(mapToProps,mapDispatchToProps)  (HeThongList)
