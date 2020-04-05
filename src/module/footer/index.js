import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.scss";

import {dsDoiTac} from '../../Constant/index'
 class Footer extends Component {
  static propTypes = {
    dsDoiTac: PropTypes.array
  };

  render() {
    const { dsDoiTac } = this.props;
    
    return (
      <footer>
        <div className="container">
            <div className='footer-top mb-5 '>
            
            <div >
              <h5>Business</h5>
            </div>
            <div className=' mb-4'>
      
            <div className=" content doitac">
              {dsDoiTac &&
                dsDoiTac.map((item, index) => (
                  <div className="footer-doitac" key={index}>
                    <img src={item.logo} alt={item.biDanh} />
                  </div>
                ))}
            </div>

         </div>
         <div className=" heading pl-0">
              <h5>Mobile App</h5>
            </div>
         <div className=' mb-4'>
        
            <div className=" content app">
              <div className="footer-appitem">
                <i className="fab fa-android"></i>
              </div>
              <div className="footer-appitem">
                <i className="fab fa-apple"></i>
              </div>
            </div>


         </div>
         <div className=''>
         <div className=" heading">
              <h5>Social</h5>
            </div>
            <div className=" content social">
                <div className='footer-socialitem'>
                <i className="fab fa-facebook-f"></i>

                </div>
                <div className='footer-socialitem'>
                <i className="fab fa-youtube"></i>

                </div>
                <div className='footer-socialitem'>
                <i className="fab fa-twitter"></i>

                </div>
                <div className='footer-socialitem'>
                <i className="fab fa-instagram"></i>

                </div>
            </div>
          </div>

   

            </div>
    
        
          <div className='footer-botoom '>
              <p>Dự án đặt vé xem phim (React)</p>
                <span>Tác giả: <a href='https://www.facebook.com/profile.php?id=100005153388854&ref=bookmarks'  target="_blank" without rel="noopener noreferrer">Nguyễn Thế Tình</a> {' (KHTN-ĐHQG HCM) thực hiện tại '}<a href='https://cybersoft.edu.vn/' target="_blank" without rel="noopener noreferrer">Cybersoft</a></span>
                <span>Dự án có tham khảo từ Web:  <a href='https://tix.vn/' target="_blank" without rel="noopener noreferrer"  >123phim.com </a> {' (Chỉ phục vụ nhu cầu học tập)'}</span>
       </div>
          </div>
        
          
    
      </footer>
    );
  }
}
// const mapPropsToState = state => ({
//   dsDoiTac: [...state.lichChieuHeThong.heThongList]
// });

Footer.defaultProps = {
  dsDoiTac
};

export default Footer
