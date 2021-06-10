import React, { Fragment } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import './home_styles.scss';
import photo from './images/eu.jpg';

export default function Home() {
    return (
        <Fragment id='home_page'>
            <Container fluid className='page_container'  id='home_container_1'>
                <Row id='row_container_1'>
                    <Col md='8'>
                        <Row id='name_container'>Oi, meu nome é Samuel</Row>
                        <Row  id='text_container'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia
                            dui non lectus mollis lobortis. Donec ac nisi mi. Nullam lacinia viverra
                            quam nec efficitur. Nulla semper erat et tortor pretium, ut euismod lectus sagittis.
                        </Row>
                        <Row><button id='donwload_btn'>Download My CV</button></Row>
                    </Col>
                    <Col md='4' id='my_photo'>
                    <img src={photo} alt='me'/>
                    </Col>
                </Row>

            </Container>

        </Fragment>
    )
}