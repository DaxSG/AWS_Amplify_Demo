import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/esm/Card"
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
function Contacts(){
    return(
        <Container>
            <Row className="px-4 my-5">
                <Col><h1>  Contacts</h1></Col>
            </Row>
            <Row>
                <Col  className="px-4 my-5">
                    <Card  className="px-2 my-2">
                        <Card style={{width: '12rem'}}>
                            <Card.Img
                                src="/img/contact_1.png"
                                variant="top" />
                            <Card.Body>
                                <Card.Title>wilifwilofwili</Card.Title>
                                <Card.Text>
                                    smurf@gmail.comp
                                    <br /> 123. 123. 1234
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Card>
                </Col>
                <Col  className="px-4 my-5">
                    <Card  className="px-2 my-2">
                        <Card style={{width: '12rem'}}>
                            <Card.Img
                                src="/img/contact_1.png"
                                variant="top" />
                            <Card.Body>
                                <Card.Title>wilifwilofwili</Card.Title>
                                <Card.Text>
                                    smurf@gmail.comp
                                    <br /> 123. 123. 1234
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Card>
                </Col>
                <Col  className="px-4 my-5">
                    <Card  className="px-2 my-2">
                        <Card style={{width: '12rem'}}>
                            <Card.Img
                                src="/img/contact_1.png"
                                variant="top" />
                            <Card.Body>
                                <Card.Title>wilifwilofwili</Card.Title>
                                <Card.Text>
                                    smurf@gmail.comp
                                    <br /> 123. 123. 1234
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Card>
                </Col>
            </Row>
        </Container>


    )
}
export default Contacts;