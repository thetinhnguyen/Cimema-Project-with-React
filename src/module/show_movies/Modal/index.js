import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import './style.scss'

export class ModalMovies extends Component {

    constructor(props) {
        super(props)
    
        this.myIframe=React.createRef();
    }
    
    static propTypes = {

    }
   
 

    render() {
        return ReactDOM.createPortal(
            <div className="modal fade" id="modaltrailer" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button stop-video" className="close" data-dismiss="modal" aria-label="Close" onClick={this.onClick}>
                    <i className="fa fa-times" />
                  </button>
                </div>
                <div className="modal-body">
                  <iframe title='Movie-modal' src={`https://www.youtube.com/embed/${this.props.youtube}`} frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  ref={this.myIframe} className='youtube-video'
                  allowFullScreen   />
                </div>
              </div>
            </div>
          </div>,
          document.getElementById('root_modal')
        )
    }
}
const mapStateToProp=state=>({ youtube: state.lichChieuHeThong.youtube})


export default connect (mapStateToProp,null) (ModalMovies)
