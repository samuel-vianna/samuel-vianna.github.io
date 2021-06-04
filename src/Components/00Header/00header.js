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
                        }}>Sobre</h5>
                        <h5 onClick={(e) => {
                            $('html, body').animate({
                                scrollTop: $('#home_container_3').offset().top
                            }, 800)
                        }}>Projetos</h5>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                        <div id='social_media'>
                            <h5><IoLogoInstagram size='4vh' /></h5>
                            <h5><IoLogoGithub size='4vh' /></h5>
                            <h5><IoLogoLinkedin size='4vh' /></h5>
                        </div>
                    </Col>
                </Row>

            </Container>
        </header>
    )
}
