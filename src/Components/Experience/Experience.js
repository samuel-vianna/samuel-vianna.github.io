import React, { Fragment, useEffect } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import $ from 'jquery';
import './exp_styles.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Experience() {

    useEffect(() => {
        Aos.init({ duration: 500 });
    }, []);

    return (
        <Fragment id='home_page'>
            <Container fluid className='page_container_no_limit' id='home_container_3'>
                <Col id='row_container_3'>
                    <Row md='12' className='title_row'>Experience</Row>
                    <Row md='12' >(hover the cards)</Row>
                    <div id='exp_container'>
                        <div id='wrap'></div>
                        <div className='exp_year'>
                            <h5>2018</h5>
                            <div className='year_info'>
                                <ExperienceCard />
                                <ExperienceCard />
                                <ExperienceCard />
                                <ExperienceCard />
                            </div>
                        </div>
                    </div>
                </Col>

            </Container>

        </Fragment>
    )
}


export function ExperienceCard(props) {

    return (
        <div className='card_exp'>
            <h5 id='card_title'>Tools</h5>

        </div>
    )
}
