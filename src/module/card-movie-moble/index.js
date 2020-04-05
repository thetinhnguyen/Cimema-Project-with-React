import React from "react";
import Button from "@material-ui/core/Button";

import CardItem from "../card-item";
import {useState,useEffect} from 'react'

function CardMovieMoble(props) {
    const [posItems,setPosItem]=useState(3)
    let movieShows=props.movies.slice(0,posItems)
    const handleMovieItem=()=>{
        setPosItem(props.movies.length)
    }
    useEffect(() => {
      setPosItem(3)
      
    }, [props.movies])
  return (
    <div className="showmovies-moble">
      {movieShows && movieShows.map((item, index) => (
        <CardItem key={index} item={item} />
      ))}
     {
         posItems===3 && <div className='d-flex justify-content-center'>
              <Button variant="contained" color="primary"
         onClick={handleMovieItem} size="large"
         >
         More
       </Button>
         </div>
     }
    </div>
  );
}

export default CardMovieMoble;
