import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Cards = (props) => {
  const { id, nombre, descripcion, Img } = props;
  console.log(props);
  return (
    <Card key={id} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Img} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );
};

export default Cards;
