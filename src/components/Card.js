// Se crea este componente porque hay estilos en común, entonces ayuda evitar repetir código
// children permite que el componente hijo pueda tener código dentro de su interior
// Si no se puede dejar todo sin sacar algo en común
import "./Card.css";
function Card(props) {
  const classes = "card " + props.className; // obtener los estilos de los hijos
  return <div className={classes}>{props.children}</div>;
}

export default Card;
