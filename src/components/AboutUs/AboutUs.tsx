import Card from "react-bootstrap/Card";

const AboutUs = () => {
  return (
    <div style={{ display: "flex" , width:"100vh", margin:"auto"}}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="src/assets/images/perrobonito1.jpg" />
        <Card.Body>
          <Card.Title>Perro Bonito</Card.Title>
          <Card.Text>Este es un perrito muy bonito</Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="src/assets/images/perrobonito2.jpg" />
        <Card.Body>
          <Card.Title>Perro Fachero</Card.Title>
          <Card.Text>Perro fachero facherito *carita fachera*</Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="src/assets/images/perrobonito3.jpg" />
        <Card.Body>
          <Card.Title>Perro Feliz</Card.Title>
          <Card.Text>perro feliz y saltarin :D</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AboutUs;
