import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";


function RegisterPage(){
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col><hi>Register</hi></Col>
            </Row>
            <Row className="pc-4 my-5">
                <Col sm={6}>
                    <Form>
                         <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your secrets!
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" minLength="8" placeholder="Enter Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formConfirm">
                            <Form.Label>Confirm</Form.Label>
                            <Form.Control type="password" minLength="8" placeholder="Confirm Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">Login &gt;&gt;</Button>&nbsp;
                        
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default RegisterPage;