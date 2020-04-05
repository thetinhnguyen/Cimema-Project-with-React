import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import { connect } from 'react-redux'
import {addGheChon,removeGhe} from '../../redux/actions/LichChieuHeThongAction'


export class GheNgoi extends Component {
    static propTypes = {
        ghe: PropTypes.object,
        color: PropTypes.string

    }
    constructor(props) {
        super(props)
    
        this.state = {
             choose: false        }
    }
    dieuKienChon=()=>{
        const {loaiGhe,daDat}=this.props.ghe;
        const {choose}=this.state;
        if(daDat){
            return ' red'
        }
        else{
            if(choose)
            return ' green'
            else{
                if(loaiGhe==='Vip'){
                    return ' lightskyblue'
                }
                else{
                    return ' white'
                }
            }
        }

    }
    handleGhe=()=>{
        if( this.props.ghe && !this.props.ghe.daDat  ){
            if(!this.state.choose){
                this.props.addGheChon(this.props.ghe)
            }
            else{
                this.props.removeGhe(this.props.ghe)
            }
            this.setState({
                choose: !this.state.choose
            })

        }
      
    }
    

    render() {
        let nameClass;
        if(this.props.ghe){
             nameClass=this.dieuKienChon()
        }
        else if(this.props.color){
            nameClass=this.props.color
        }
       
        const {choose}=this.state
       
        return (
            <div className={`GheNgoi${nameClass}`} onClick={this.handleGhe}>
               
        {choose && this.props.ghe && this.props.ghe.stt}
            </div>
        )
    }
}
const mapDispatchToProp=dispatch=>({
    addGheChon: ghe=>dispatch(addGheChon(ghe)),
    removeGhe: ghe=>dispatch(removeGhe(ghe))

})

export default connect(null,mapDispatchToProp) (GheNgoi)
