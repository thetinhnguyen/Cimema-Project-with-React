import React,{Component} from 'react';
import PropTypes from 'prop-types'
import './Star.css';
class Star extends Component{
  static propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func,
    size: PropTypes.string
  }
  render(){
    let {selected,size}=this.props;
    return (
      <div className={selected ? "star selected" : "star"} 
      onClick={this.props.onClick} style={{
        height: `${size}`,
        width: `${size}`
      }}
      >
      </div>
    );
  }
}
Star.defaultProps={
  selected: true,
  size: '12px'
}
export default Star;