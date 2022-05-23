import "./style.css";
import {useLocation} from 'react-router-dom';

import Botao from "../layout/botao/Botao";

function ListaAssentos({seat}){
    return (
        <p>Assento {seat}</p>
    )
}
export default function Sucesso() {
    const location = useLocation();

    console.log(location.state);
    return (
        <>
            <div className="title success">
                <h1>Pedido feito <br/> com sucesso!</h1>
            </div>

            <div className="container">
                <div className="info-pedido">
                    <h4 className="">Filme e sessão</h4>
                    <p>{location.state.info.filme}</p>
                    <p>{location.state.info.dia} {location.state.info.horario}</p>

                    <h4 className="pt-20">Ingressos</h4>
                   
                    {location.state.info.assentos.map( seat => <ListaAssentos seat={seat} key={seat}/> ) }

                    <h4 className="pt-20">Comprador</h4>
                    <p>Nome: {location.state.info.name}</p>
                    <p>CPF: {location.state.info.cpf}</p>

                    <div className="finaliza">
                        <Botao />
                    </div>
                </div>

               

            </div>
            
        </>
    );

}