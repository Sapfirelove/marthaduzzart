import React from 'react';

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <footer className="mt-5">
        <Container>
            <Row className="justify-content-center text-center p-3">
                <Col className="p-0 " md={4}>
                    <p>&copy; {new Date().getFullYear()} Copyright: MarthaDuzzArt</p>
                </Col>
            </Row>
        </Container>
        </footer>
    );
}

export default Footer;