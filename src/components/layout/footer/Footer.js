import "./style.css";

export default function Footer({img, filme, dia, horario}) {

    return (
        <footer>
            <div className="movie-img">
                <img src={img === null ? ('') : (img) } />
            </div>
            <div className="info">
                <h3>{filme === null ? ('') : (filme) }</h3>
                <h3>{dia === null ? ('') : (dia ) } {horario === null ? ('') : (horario) }</h3>
            </div>
        </footer>
    ); 

}