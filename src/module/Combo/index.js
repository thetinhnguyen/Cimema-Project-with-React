import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { connect } from "react-redux";
import { changeCombo } from "../../redux/actions/LichChieuHeThongAction";

export class Combo extends Component {
  static propTypes = {
    combo: PropTypes.object
  };
  changeCombo = index => {
      
      if(( index===1 && this.props.combo.quanty<9 ) || ( index===-1 && this.props.combo.quanty>0 ) ){
        this.props.changeCombo(this.props.combo, index);
      }
   
  };

  render() {
    const { img, name, price, quanty } = this.props.combo;
    return (
      <div className="combo">
        <div className="combo_content">
          <div className="combo_img">
            <img src={img} alt="combo" />
          </div>
          <div className="combo_name-price">
            <h5>{name}</h5>

            <p>{price} VNĐ</p>
          </div>
        </div>
        <div className="combo_change">
          <span className="decrease" onClick={() => this.changeCombo(-1)} style={quanty >0 ? {color: 'red'} : {} }>
            -
          </span>
          <button className="btn btn-light disabled">{quanty}</button>
          <span className="increase" onClick={() => this.changeCombo(1)} style={quanty <9 ? {color: 'red'} : {} } >
            +
          </span>
        </div>
      </div>
    );
  }
}
Combo.defaultProps = {
  combo: {
    img:
      "https://mcinox.cgv.vn/cinox/atomicDownload/downloadFile.fo?ATTCH_NO=206457&SEQ_NO=308491",
    name: "MY COMBO MR 2020 (ONLINE)",
    price: 79000,
    quanty: 0
  }
};
const mapDispatchToProp = dispatch => ({
  changeCombo: (combo, value) => dispatch(changeCombo(combo, value))
});

export default connect(null, mapDispatchToProp)(Combo);
