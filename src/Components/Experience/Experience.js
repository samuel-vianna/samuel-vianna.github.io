import React, { Fragment, useEffect } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import $ from 'jquery';
import './exp_styles.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import expList from './experiences.json';

export default function Experience() {

    useEffect(() => {
        Aos.init({ duration: 500 });
    }, []);

    return (
        <Fragment id='home_page'>
            <Container fluid className='page_container_no_limit' id='home_container_3'>
                <Col id='row_container_3'>
                    <Row md='12' className='title_row'>Experience</Row>
                    <div id='exp_container'>
                        <div id='wrap'></div>
                        <div>
                            {expList.map(exp => {
                                return (
                                    <div className='exp_year'>
                                        <h5>{exp.year}</h5>
                                        <div className='year_info'>
                                            {exp.list.map(card => {
                                                return (
                                                    <ExperienceCard info={card} />
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })
                            }

                        </div>


                    </div>
                </Col>

            </Container>

        </Fragment>
    )
}


export function ExperienceCard(props) {
    var info = props.info

    return (
        <div className='card_exp'>
            <h5 id='card_title'>{info.title}</h5>
            <div className='date-row'>
                <div className='date-info'>
                    <p className='date-desc'>Start:</p>
                    <p className='date-number'>{info.start}</p>
                </div>

                <div className='date-info'>
                    <p className='date-desc'>End:</p>
                    <p className='date-number'>{info.end}</p>
                </div>
            </div>

            <p>{info.description}</p>

        </div>
    )
}
