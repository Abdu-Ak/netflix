import React,{useEffect,useState} from 'react'
import YouTube from 'react-youtube'
import './Rowpost.css'
import axios from '../../axios'
import {  API_KEY, IMAGE_URL } from '../../constants/constants'


function Rowpost(props) {
    const [movies, setmovies] = useState([])
    const [ytId, setYtid] = useState('')
 useEffect(()=>{
  axios.get(props.url).then((res)=>{
    setmovies(res.data.results)
  })
 }, [props.url])
 const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
}
const handleMovie = (id)=>{
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(res=>{
    if (res.data.results.length!==0) {
        setYtid(res.data.results[0])
    }
  })
}
  return (

    <div className='row'>
    <h2>{props.title}</h2>
    <div className='posters'>
    {movies.map((obj)=>
         <img onClick={()=>{handleMovie(obj.id)}}  className={props.isSmall ? "smallposter" : "poster"}  alt='poster' src={`${IMAGE_URL+obj.backdrop_path}`} />
    )}
        
       
    </div>
   
    { ytId && (<div>
      <i class="fas fa-times close" onClick={()=>{setYtid("") }}></i>
      <YouTube opts={opts} videoId ={ytId.key} />
    </div>) }
    

</div>
  )
}

export default Rowpost