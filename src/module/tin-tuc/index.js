import React from "react";
import TinTucItem from "../tin-tuc-item";
import './style.scss'
import FiberNewIcon from '@material-ui/icons/FiberNew';
export default function TinTuc() {
  return (
    <div id="tintuc" className='my-5'>
      <div className="container">
         
          <div className='heading-tintuc'>
              Tin Tức { <FiberNewIcon  />}
          </div>
      <div class="row">
          <div className='col-sm-12 col-md-6'>
          <TinTucItem img='https://s3img.vcdn.vn/123phim/2020/02/7b764fbc616b0910c9517c1360a5b46c.jpg' title='Công thức nào đã giúp Pixar lấy được cả nụ cười lẫn nước mắt của khán giả?' />

          </div>
        
          <div className='col-sm-12 col-md-6' >
          <TinTucItem img='https://s3img.vcdn.vn/123phim/2020/02/96cc4912ec8e7528ef6f75256efbd393.jpg' title="Khi đế chế 'số một' làng phim kinh dị Blumhouse bắt tay thiên tài tái sáng tạo..." />

          </div>


          <div className='col-sm-12 col-md-4'>
          <TinTucItem img='https://s3img.vcdn.vn/123phim/2020/02/4168842fd3144bb7f965eeecb4d03bd3.jpg' title="Trước khi 'nín thở' với Vùng Đất Câm Lặng II, bạn cần phải biết trước điều gì?" />

          </div>
        
          <div className='col-sm-12 col-md-4'>
          <TinTucItem img='https://s3img.vcdn.vn/123phim/2020/02/efd068c7de233837e7a49ad96f05eb4c.jpg' title='Đạo diễn siêu phẩm Searching tái xuất trong tác phẩm kinh dị - giật gân Run' />

          </div>


          <div className='col-sm-12 col-md-4'>
          <TinTucItem img='https://s3img.vcdn.vn/123phim/2020/02/can-phong-cam-do-su-that-ngu-tri-trong-con-nguoi-u-am-den-co-nao-15810652777390.jpg' title='Liệu Run sẽ mang đến điều đặc biệt gì như cách mà Searching tạo cơn sốt toàn cầu?' />

          </div>
        
         





          </div>

          

        
    
       
    
        </div>
      </div>
   
  );
}
