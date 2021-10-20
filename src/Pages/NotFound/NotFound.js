import React from 'react';
import './NotFound.css';
import notFound from '../../Images/notFound/notFound.jpg'
import { Col, Container, Row } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1>The page you entered is invalid</h1>
                        <img className="my-4 img-fluid" src={notFound} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NotFound;