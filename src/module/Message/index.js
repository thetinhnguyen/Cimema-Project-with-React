import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Message extends Component {
    static propTypes = {
        id: PropTypes.string,
        kind: PropTypes.string ,//success
        title: PropTypes.string
    }

    render() {
        const {id,kind,title}=this.props
        let src ="https://img.icons8.com/doodle/48/000000/error.png"
        if(kind==='error'){
            src="https://img.icons8.com/doodle/48/000000/error.png"
        }
        else if(kind==='success'){
            src ="https://img.icons8.com/ios/64/000000/ok.png"

        }
        return (
            <div className="modal fade" id={id} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header text-center">
                  <h5 className=" text-center text-dark" id="exampleModalLabel">Thông báo</h5>
                </div>
                <div className="modal-body">
                <img src={src} alt='a' />
    <span className={kind==='error'? 'text-danger ml-3' : 'text-success ml-3'}>{title}</span>
                 
                </div>
                {kind==='error' &&   <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-dismiss="modal">Ok</button>
                  
                </div>}
              
              </div>
            </div>
          </div>
        )
    }
}

export default Message
