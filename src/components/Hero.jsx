import "../App.css";
import "./Hero.css";

function Hero(props) {
    return (
        <div className="superhero">
            <h2>{props.name}</h2>
            <img className="hero-image" src={props.image} alt={props.name} ></img>
            <p>
                <span>Вселенная:</span> {props.universe}
            </p>
            <p>
                <span>Альтер эго:</span> {props.alterego}
            </p>
            <p>
                <span>Род деятельности:</span> {props.business}
            </p>
            <p>
                <span>Друзья:</span> {props.friends}
            </p>
            <p>
                <span>Суперсилы:</span> {props.superpowers}
            </p>
            <p>
                <span>Подробнее:</span> {props.details}
            </p>
        </div>
    );
}
export default Hero;