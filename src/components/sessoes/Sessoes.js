
import Botao from "../layout/botao/Botao";
import Footer from "../layout/footer/Footer";

export default function Sessoes() {

    return (
        <>
            <div className="title">
                <h1>Selecione o horário</h1>
            </div>

            <div className="container">
                <h2 className="pt-20 pb-20">Quinta-feira - 24/06/2021</h2>
                <Botao /> <Botao />
                <h2 className="pt-20 pb-20">Quinta-feira - 24/06/2021</h2>
                <Botao /> <Botao />
            </div>
            <Footer />
        </>
    );

}