import { useState, useEffect } from "react";
import { Link, useParams, useNavigate  } from "react-router-dom";
import axios from "axios";

import "./style.css";
import Botao from "../layout/botao/Botao";
import Footer from "../layout/footer/Footer";

function Assento({seat}){

    const [isSelected, setIsSelected] = useState(false);
    
    const handleClick = event => {
        
        setIsSelected(current => !current);

        
        if(event.currentTarget.classList.contains('indisponivel') ){
            alert("Esse assento não está disponível");
        }
        
    };

    return (
        <div id={seat.id} className={'assento ' + (seat.isAvailable == true ? ( isSelected ? 'selecionado' : '') : 'indisponivel')} onClick={handleClick} >{seat.name}</div>
    )
}

export default function Assentos() {

    const { idSessao } = useParams();
    const navigate = useNavigate();

    const [dados, setDados] = useState(null);
	const [formNome, setFormNome] = useState("");
	const [formCPF, setFormCPF] = useState("");

    useEffect(() => {

        const promise = axios.get(
            `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
        );

        promise.then((response) => {
            setDados(response.data);
        });
 
    }, []);
    
    function enviaDados (event) {
		event.preventDefault();
        
        const el = document.getElementsByClassName('selecionado');
        let assentosSelecionados = [];
        let nomesAssentosSelecionados = [];

        for (var i=0; i< el.length; i++ ) {
            
            assentosSelecionados.push(el[i].id);
            nomesAssentosSelecionados.push(el[i].innerHTML);
        }


        const infoPedido= {
            filme: dados.movie.title,
            dia: dados.day.weekday,
            horario: dados.name,
            assentos: nomesAssentosSelecionados,
            name: formNome,
            cpf: formCPF
        }
        

		axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", {
            ids: assentosSelecionados,
            name: formNome,
            cpf: formCPF

		})
        .then(navigate('/sucesso', {state:{info:infoPedido}} ))
        .catch((err) => console.error(err));
	}

    return (
        dados === null ? (<div className="loading">Carregando...</div>): (
            <> 
                <div className="title">
                    <h1>Selecione o(s) assento(s)</h1>
                </div>

                <div className="container">
                    <div className="assentos-grid">

                        {dados.seats.map( seat => <Assento seat={seat} key={seat.id}/> ) }

                    </div>

                    <div className="legenda">
                        <div className="legenda-item">
                            <div className="assento selected"></div>
                            <p>Selecionado</p>
                        </div>
                        <div className="legenda-item">
                            <div className="assento"></div>
                            <p>Disponível</p>
                        </div>
                        <div className="legenda-item">
                            <div className="assento indisponivel"></div>
                            <p>Indisponível</p>
                        </div>
                    </div>

                    <form onSubmit={enviaDados}>
                        <div className="input-dados">
                            <h2 className="">Nome do comprador:</h2>
                            <input type="text" placeholder="Digite seu nome..." value={formNome} onChange={e => setFormNome(e.target.value)} required />

                            <h2 className="">CPF do comprador:</h2>
                            <input type="text" placeholder="Digite seu CPF..." value={formCPF} onChange={e => setFormCPF(e.target.value)} required />

                            <div className="submit">
                              
                                <button type="submit">Reservar assento(s)</button>
                            </div>
                            
                        </div>
                    </form>

                </div>

                <Footer img={dados.movie.posterURL} filme={dados.movie.title} dia={dados.day.weekday} horario={dados.name}/>
            </>
        )
    );

}