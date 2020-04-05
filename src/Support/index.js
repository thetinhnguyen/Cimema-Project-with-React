
// import moment from  'moment'

import axios from 'axios'
import $ from 'jquery'
import * as moment from 'moment'

 const a= [{"maLichChieu":16099,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-01T10:10:00","giaVe":75000},{"maLichChieu":16100,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-01T12:10:00","giaVe":75000},{"maLichChieu":16101,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-01T14:10:00","giaVe":75000},{"maLichChieu":16102,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-01T16:10:00","giaVe":75000},{"maLichChieu":16103,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-01T18:10:00","giaVe":75000},{"maLichChieu":16104,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-01T20:10:00","giaVe":75000},{"maLichChieu":16105,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-02T10:10:00","giaVe":75000},{"maLichChieu":16106,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-02T12:10:00","giaVe":75000},{"maLichChieu":16107,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-02T14:10:00","giaVe":75000},{"maLichChieu":16108,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-02T16:10:00","giaVe":75000},{"maLichChieu":16109,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-02T18:10:00","giaVe":75000},{"maLichChieu":16110,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-02T20:10:00","giaVe":75000},{"maLichChieu":16111,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-03T10:10:00","giaVe":75000},{"maLichChieu":16112,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-03T12:10:00","giaVe":75000},{"maLichChieu":16113,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-03T14:10:00","giaVe":75000},{"maLichChieu":16114,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-03T16:10:00","giaVe":75000},{"maLichChieu":16115,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-03T18:10:00","giaVe":75000},{"maLichChieu":16116,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-03T20:10:00","giaVe":75000},{"maLichChieu":16117,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-04T10:10:00","giaVe":75000},{"maLichChieu":16118,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-04T12:10:00","giaVe":75000},{"maLichChieu":16119,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-04T14:10:00","giaVe":75000},{"maLichChieu":16120,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-04T16:10:00","giaVe":75000},{"maLichChieu":16121,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-04T18:10:00","giaVe":75000},{"maLichChieu":16122,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-04T20:10:00","giaVe":75000},{"maLichChieu":16123,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-05T10:10:00","giaVe":75000},{"maLichChieu":16124,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-05T12:10:00","giaVe":75000},{"maLichChieu":16125,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-05T14:10:00","giaVe":75000},{"maLichChieu":16126,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-05T16:10:00","giaVe":75000},{"maLichChieu":16127,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-05T18:10:00","giaVe":75000},{"maLichChieu":16128,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-05T20:10:00","giaVe":75000},{"maLichChieu":16129,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-06T10:10:00","giaVe":75000},{"maLichChieu":16130,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-06T12:10:00","giaVe":75000},{"maLichChieu":16131,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-06T14:10:00","giaVe":75000},{"maLichChieu":16132,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-06T16:10:00","giaVe":75000},{"maLichChieu":16133,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-06T18:10:00","giaVe":75000},{"maLichChieu":16134,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-06T20:10:00","giaVe":75000},{"maLichChieu":16135,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-07T10:10:00","giaVe":75000},{"maLichChieu":16136,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-07T12:10:00","giaVe":75000},{"maLichChieu":16137,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-07T14:10:00","giaVe":75000},{"maLichChieu":16138,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-07T16:10:00","giaVe":75000},{"maLichChieu":16139,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-07T18:10:00","giaVe":75000},{"maLichChieu":16140,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-07T20:10:00","giaVe":75000},{"maLichChieu":16141,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-08T10:10:00","giaVe":75000},{"maLichChieu":16142,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-08T12:10:00","giaVe":75000},{"maLichChieu":16143,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-08T14:10:00","giaVe":75000},{"maLichChieu":16144,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-08T16:10:00","giaVe":75000},{"maLichChieu":16145,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-08T18:10:00","giaVe":75000},{"maLichChieu":16146,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-08T20:10:00","giaVe":75000},{"maLichChieu":16147,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-09T10:10:00","giaVe":75000},{"maLichChieu":16148,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-09T12:10:00","giaVe":75000},{"maLichChieu":16149,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-09T14:10:00","giaVe":75000},{"maLichChieu":16150,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-09T16:10:00","giaVe":75000},{"maLichChieu":16151,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-09T18:10:00","giaVe":75000},{"maLichChieu":16152,"maRap":"467","tenRap":"Rạp 7","ngayChieuGioChieu":"2019-01-09T20:10:00","giaVe":75000}]





// return result[key:'',value: []]   
// key : 'dd/mm/yy' value:[]: danh sach cac lich chieu thuoc ngay 'key'
// console.log('jajaj', locLichChieu(a))
 function locLichChieu(lichChieu){
    let result=[]
    lichChieu.forEach(item => {
        const ngayChieu=moment(item.ngayChieuGioChieu).format('DD/MM/YYYY')

        let index=result.findIndex(itemResult=>{return itemResult.key===ngayChieu})
        if(index===-1){
            result=[...result,
                {
                        key: ngayChieu,
                        value: [{...item}]
                }
            ]
            
        }
        else{
            result[index].value=[...result[index].value,{...item}]
        }
    });
     result.sort((next,prev)=>{       
        return  moment(next.key,'DD/MM/YYYY')<moment(prev.key,'DD/MM/YYYY')
     })
    
     return result
}

 function  lichChieuLonNhat(licChieu){
  let kq=moment('1999-12-01')
  licChieu.forEach(element => {
    const ngayChieu=moment(element.ngayChieuGioChieu)
    if(ngayChieu>kq){
      kq=ngayChieu
    }
  
   
  });
  return kq.format('DD/MM/YYYY')
}

//
export function searchLichChieu(lichieu){
  const lichLon=lichChieuLonNhat(lichieu)
  const kq= lichieu.filter(element => {
    return  moment(element.ngayChieuGioChieu).format('DD/MM/YYYY')===lichLon
  });
  return kq
}

export const dayOfWeek = index => {
    switch (index) {
      case 0:
        return "Monday";
      case 1:
        return "Tuesday";
      case 2:
        return "Wednesday";
      case 3:
        return "Thursday";
      case 4:
        return "Friday";
      case 5:
        return "Saturday";
      case 6:
        return "Sunday";
      default:
        return "Không rõ";
    }
  };
export {locLichChieu,a} 

export const ScrollToDestination=(dest,speed)=>{
 
  if(window.pageYOffset<dest){
    let setTime=setInterval(() => {
      window.scrollTo(0,window.pageYOffset+speed)
      if(window.pageYOffset>dest-15){
        window.scrollTo(0,dest-5)
        clearInterval(setTime)
      }
    }, 0);

  }
  else{
    let setTime=setInterval(() => {
      window.scrollTo(0,window.pageYOffset-speed)
      if(window.pageYOffset<dest+10){
        window.scrollTo(0,dest-5)
        clearInterval(setTime)
      }
    }, 0);

  }
 

}
/// goi API 
export const callAPI=(method,resolve,reject)=>{
  return axios(method).then(
    Response=>resolve(Response.data)
  ).catch(erro=>reject(erro))

}

export const custumNAvMoble=(left,speed)=>{
  $(".nav-mobile").animate(
    {
      left: left
    },
    speed
  );
}




