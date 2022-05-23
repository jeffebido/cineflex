import "./style.css";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


function MovieCard({source, id}){
    return (
        <Link to={`/sessoes/${id}`} className="movie-card" key={id}>
                <img src={source} />
        </Link>
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
        movies === null ? (<div className="loading">Carregando...</div>): (
            <>  
                <div className="title">
                    <h1>Selecione o filme</h1>
                </div>

                <div className="container">
                    <div className="movies-grid">
                    {movies.map( movie => <MovieCard source={movie.posterURL} id={movie.id}  key={movie.id}/> ) }
                    </div>

                </div>
            </>
        )
    )
}