import "./style.css";

import Botao from "../layout/botao/Botao";


export default function Sucesso() {

    return (
        <>
            <div className="title success">
                <h1>Pedido feito <br/> com sucesso!</h1>
            </div>

            <div className="container">
                <div className="info-pedido">
                    <h4 className="">Filme e sessão</h4>
                    <p>Enola Holmes</p>
                    <p>24/06/2021 15:00</p>

                    <h4 className="pt-20">Ingressos</h4>
                    <p>Assento 15 </p>
                    <p>Assento 16</p>

                    <h4 className="pt-20">Comprador</h4>
                    <p>Nome: João da Silva Sauro</p>
                    <p>CPF: 123.456.789-10</p>

                    <div className="finaliza">
                        <Botao />
                    </div>
                </div>

               

            </div>
            
        </>
    );

}