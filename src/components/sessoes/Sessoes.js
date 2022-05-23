import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import Botao from "../layout/botao/Botao";
import Footer from "../layout/footer/Footer";


function SessaoItem({dia}){
    
    return (
        <>
            <h2 className="pt-20 pb-20">{dia.weekday} - {dia.date}</h2>
            
            {dia.showtimes.map(({ name, id }) => (

                <Link to={`/assentos/${id}`} key={id} className="ml-10">
                    <Botao text={name}  />
                </Link>
                
            ))}
        </>
    );
}

export default function Sessoes() {

    const { idFilme } = useParams();

    const [dados, setDados] = useState(null);

    useEffect(() => {

        const promise = axios.get(
            `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
        );

        promise.then((response) => {
            setDados(response.data);
        });
 
    }, []);


    return (
        dados === null ? (<div className="loading">Carregando...</div>): (
            <>
                <div className="title">
                    <h1>Selecione o horário</h1>
                </div>

                <div className="container">
                    {dados.days.map( dia => <SessaoItem dia={dia} key={dia.id}/> ) }

                </div>
                <Footer img={dados.posterURL} filme={dados.title}/>
            </>
        )
    )
} 