import "./style.css";
import Botao from "../layout/botao/Botao";
import Footer from "../layout/footer/Footer";

export default function Assentos() {

    return (
        <>
            <div className="title">
                <h1>Selecione o(s) assento(s)</h1>
            </div>

            <div className="container">
                <div className="assentos-grid">
                    <div className="assento">1</div>
                    <div className="assento">2</div>
                    <div className="assento">3</div>
                    <div className="assento">4</div>
                    <div className="assento">5</div>
                    <div className="assento">6</div>
                    <div className="assento">7</div>
                    <div className="assento">8</div>
                    <div className="assento">9</div>
                    <div className="assento">10</div>
                    <div className="assento">11</div>
                    <div className="assento indisponivel">12</div>
                    <div className="assento selecionado">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                    <div className="assento">13</div>
                </div>

                <div className="legenda">
                    <div className="legenda-item">
                        <div className="assento selecionado"></div>
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

                <div className="input-dados">
                    <h2 className="">Nome do comprador:</h2>
                    <input type="text" placeholder="Digite seu nome..."/>

                    <h2 className="">CPF do comprador:</h2>
                    <input type="text" placeholder="Digite seu CPF..."/>

                    <div className="submit">
                        <Botao />
                    </div>
                    
                </div>

            </div>

            <Footer />
        </>
    );

}