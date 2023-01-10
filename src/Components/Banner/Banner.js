
import React, { useEffect, useState } from 'react'
import { API_KEY,IMAGE_URL  } from '../../constants/constants';
import './Banner.css'
import axios from "../../axios";

function Banner() {
    const [movie, setmovie] = useState()
    useEffect(()=>{
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data.results);
        let number = `${Math.floor( Math.random() * 19 + 1)}`
       setmovie(response.data.results[number])
      })
    }, [])

  return (  
    <div 
    style={{backgroundImage:`url(${movie ? IMAGE_URL+movie.backdrop_path : ''})` }}
         className='banner'>
            <div className='content' >
                <h1 className='title'> {movie ? movie.title : ''} </h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{movie ? movie.overview  : ''}</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
  )
}

export default Banner