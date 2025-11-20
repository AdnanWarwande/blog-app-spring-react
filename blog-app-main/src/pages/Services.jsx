import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import userContext from "../context/userContext"
import Base from "../components/Base"

const Services = () => {
    return (
        <userContext.Consumer>
            {(object) => (
                <Base>
                    <Container className="py-5">
                        <h1 className="text-center mb-4">Contact Us</h1>
                        <Row className="justify-content-center">
                            <Col md={8}>
                                <Form>
                                    <FormGroup>
                                        <Label for="name">Your Name</Label>
                                        <Input type="text" id="name" placeholder="Enter your name" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="email">Your Email</Label>
                                        <Input type="email" id="email" placeholder="Enter your email" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="message">Message</Label>
                                        <Input type="textarea" id="message" placeholder="Enter your message" rows={5} />
                                    </FormGroup>
                                    <Button color="primary" type="submit">Submit</Button>
                                </Form>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col md={8} className="mx-auto">
                                <h2>Additional Information</h2>
                                <p>If you have any questions or inquiries, feel free to reach out to us using the contact form above. We typically respond within 24-48 hours.</p>
                                <p>You can also contact us via email at <a href="mailto:contact@example.com">contact@example.com</a> or call us at <a href="tel:+123456789">+123456789</a>.</p>
                                <p>Our office address:</p>
                                <p>123 Main Street, City, Country</p>
                            </Col>
                        </Row>
                    </Container>
                </Base>
            )}
        </userContext.Consumer>
    );
}

export default Services