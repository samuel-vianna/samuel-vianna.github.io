import React, { Fragment } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import './home_styles.scss';
import photo from './images/eu.jpg';
import { CgPiano } from 'react-icons/cg'
import { FaGamepad } from 'react-icons/fa'
import { BsMusicNoteBeamed } from 'react-icons/bs'

export default function Home() {
    return (
        <Fragment id='home_page'>
            <Container fluid className='page_container' id='home_container_1'>
                <Row id='row_container_1'>
                    <Col md='8'>
                        <Row id='name_container'>Oi, meu nome é Samuel</Row>
                        <Row id='text_container'>
                            <h5>Sou graduando em estatística na UEM, desenvolvedor Web
                                interessado em criar aplicações que ajudem na construção de um mundo melhor.
                            </h5>
                        </Row>
                        <Row id='hobbies'>
                            <p>Hobbies:</p> <CgPiano size='3vh' id='hobbie1' /> <FaGamepad size='3vh' id='hobbie2' /> <BsMusicNoteBeamed size='3vh' id='hobbie3'/>
                        </Row>
                        <Row><button id='donwload_btn'>Download CV</button></Row>
                    </Col>
                    <Col md='4' id='my_photo'>
                        <img src={photo} alt='me' />
                    </Col>
                </Row>

            </Container>

        </Fragment>
    )
}