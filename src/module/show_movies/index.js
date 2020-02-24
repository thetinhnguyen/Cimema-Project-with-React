import React, { Component } from 'react'
import PropTypes from 'prop-types'
import OwlCarousel from 'react-owl-carousel2';
import {getMovies_asyc,showMovies} from '../../redux/actions/ShowMoviesAction'
import {connect} from 'react-redux'
import './style.scss'

import CardMovie from './CardMovie/index'


export class ShowMovies extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      currentMovies: true,
      comingMoives: false,
      movies: [],
      startPosition: 0,
      modalOn: false
    }
  }
  static propTypes={
    getMovies: PropTypes.func,
    movies: PropTypes.array,
    showMovies: PropTypes.func
  }
  
    componentDidMount(){
      this.props.getMovies();
    }
    changeShow=(check)=>{
      if(check===1){
      this.setState({
          currentMovies: false,
          comingMoives: true,
          startPosition:0
        })
      }
      else{
      this.setState({
          currentMovies: true,
          comingMoives: false,
          startPosition: 0
        })
      }
      this.props.showMovies(check)
    }

    render() {
      const {movies}=this.props
        const options = {
            items: 4,
            nav: true,
            rewind: true,
            autoplay: true,
            dots:false,
            navText:[<i class="fa fa-angle-left"></i>,<i class="fa fa-angle-right"></i>]
            ,responsive:{
              0:{
                  items:1
              },
              500:{
                items:2
              },
              700:{
                  items:3
              },
              1000:{
                  items:4
              }
          },
          startPosition: this.state.startPosition
        };
        const {currentMovies,comingMoives}=this.state
        return (
          <div className='show_movies' id='show_movies'>
            <div className='movies-nav'>
              <p onClick={()=>this.changeShow(0)}
              className={currentMovies? 'actives' : ''}

              >Đang Chiếu</p>
              <p
              onClick={()=>this.changeShow(1)}
              className={comingMoives? 'actives' : ''}
              
              >Sắp Chiếu</p>
             
            </div>
            {movies.length>0 && <OwlCarousel  options={options} 
            
            >
                { movies.map((item,index)=> <CardMovie movie={item} key={index}
              
                />
                    
                )}
            </OwlCarousel>}
      {/* <ModalMovies /> */}
        </div>
        )
    }
}
const mapStateToProps=state=>{
  return {
    movies: state.moviesReducers.moviesShow
  }

}
const mapDispatchToProps=dispatch=>{
  return {
    getMovies: ()=>dispatch(getMovies_asyc()),
    showMovies: check=>dispatch(showMovies(check))
  }
}
ShowMovies.defaultProps={
  movies:[]
}

export default connect(mapStateToProps,mapDispatchToProps) (ShowMovies)
