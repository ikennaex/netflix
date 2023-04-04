import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from "./axios"
import requests from "./Requests"

const Banner = () => {
    const [movie, setMovie] = useState([]);
    
    useEffect (() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            // return request
            }
            fetchData()
        }, [])

        console.log(movie)

    function elipses(string, n) {
        return string?.length > n ? string.slice(0, n) + " ..." : string
    }

  return (
    <header className='banner' 
    style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: 'center center',
    }}>

        <div className='banner-contents'>
            <h1 className='banner-title'>{movie?.title || movie?.name || movie?.original_name }</h1>
            <div className="banner-buttons">
                <button className='banner-button'>Play</button>
                <button className='banner-button'>My list</button>
            </div>

            <h1 className='banner-desc'>
            {elipses( movie.overview , 150)}  </h1>
        </div>

        <div className="banner-fadebuttom" />
    </header>
  )
}

export default Banner;