import React from 'react';
import './styles.scss';
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { Row, Container, Col } from 'react-bootstrap';
import $ from 'jquery';

export default function Header() {
    return (
        <header>
            <Container fluid>
                <Row>
                    <Col md='4' id='links'>
                        <h5 onClick={(e) => {
                            $('html, body').animate({
                                scrollTop: 0
                            }, 800)
                        }}>Início</h5>
                        <h5 onClick={(e) => {
                            $('html, body').animate({
                                scrollTop: $('#home_container_2').offset().top
                            }, 800)
                        }}>Habilidades</h5>
                        <h5 onClick={(e) => {
                            $('html, body').animate({
                                scrollTop: $('#home_container_3').offset().top
                            }, 800)
                        }}>Experiências</h5>
                        <h5 onClick={(e) => {
                            $('html, body').animate({
                                scrollTop: $('#home_container_3').offset().top
                            }, 800)
                        }}>Projetos</h5>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                        <div id='social_media'>
                            <a href='https://www.instagram.com/samuel.vianna/' target='_blank' rel='noreferrer'>
                                <h5><IoLogoInstagram size='4vh' /></h5>
                            </a>
                            <a href='https://github.com/samuel-vianna' target='_blank' rel='noreferrer'>
                                <h5><IoLogoGithub size='4vh' /></h5>
                            </a>
                            <a href='https://www.linkedin.com/in/samuel-vianna-a5b0b31b2/' target='_blank' rel='noreferrer'>
                                <h5><IoLogoLinkedin size='4vh' /></h5>
                            </a>
                        </div>
                    </Col>
                </Row>

            </Container>
        </header>
    )
}
