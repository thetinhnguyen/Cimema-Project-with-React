import React, { Component } from 'react'
import ReactLoading from 'react-loading';
import ReactDOM from 'react-dom'
 import './style.scss'
 import {connect} from 'react-redux'

export class Loading extends Component {    
    render() {
        return ReactDOM.createPortal( 
            <div className='loading' style={{display: this.props.loading ?  'block' : 'none' }} >
                <div className='loading_display' style={{top:`${window.pageYOffset+5}px`}}>
                <ReactLoading type={'bubbles'} color={'#2c3e50'} height={70} width={100} />
                </div>       
            </div>,
              document.getElementById('root_modal')
        )
    }
}
const mapStateToProps=state=>({
    loading: state.lichChieuHeThong.loading || state.RapChieuPhim.loading || state.LichChieuCTP.loading
})

export default connect(mapStateToProps,null) (Loading)
