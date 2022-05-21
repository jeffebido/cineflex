import "./style.css";

import { useState, useEffect } from 'react';
import axios from 'axios';


function MovieCard({source, id}){
    return (
        <div className="movie-card" key={id}>
            <img src={source} />
        </div>
    );
}


export default function Home() {


    const [movies, setMovies] = useState([]);

    useEffect(() => {

        const promise = axios.get(
            'https://mock-api.driven.com.br/api/v5/cineflex/movies'
        );

        promise.then((response) => {
            setMovies(response.data);
        });

    }, []);


    return (
        <>
            <div className="title">
                <h1>Selecione o filme</h1>
            </div>

            <div className="container">
                <div className="movies-grid">
                  {movies.map( movie => <MovieCard source={movie.posterURL} key={movie.id} /> ) }
                </div>

            </div>
        </>
    );
}