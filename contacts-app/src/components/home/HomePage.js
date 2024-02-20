
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

function HomePage(){

    return (
        <Container>
            <Row className="px-4 my-5">
                <Col xs={4} sm={6}>
                    <Image 
                        src = "img/logo.png"
                        fluid
                    />
                </Col>
                <Col sm={6} >
                    <h1 className="font-weight-light">New Waves App</h1>
                    <p>dhshfbsdhshfbsdhshfbsdhshfbsdhshfbsdhshfbs</p>
                </Col>
            </Row>
        </Container>
    )

}
export default HomePage;