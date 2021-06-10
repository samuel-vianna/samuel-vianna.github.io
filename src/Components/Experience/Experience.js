import React, { Fragment, useEffect } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import $ from 'jquery';
import './exp_styles.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import expList from './experiences.json';
import studiesList from './studies.json';
import { FaGraduationCap } from 'react-icons/fa';

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

                    <div id='studies'>
                        <FaGraduationCap size='6vh' id='icon1' />
                        <h5>Formação</h5>
                        <FaGraduationCap size='6vh' id='icon2' />
                    </div>
                    <div id='studies_container'>
                        {studiesList.map(card => {
                            return (
                                <StudyCard info={card} />
                            )
                        })}
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

            <div className='local_row'>
                <p className='row_title'>Local:</p>
                <p>{info.local}</p>
            </div>

            <div className='date-row'>
                <div className='date-info'>
                    <p className='row_title'>Start:</p>
                    <p className='date-number'>{info.start}</p>
                </div>

                <div className='date-info'>
                    <p className='row_title'>End:</p>
                    <p className='date-number'>{info.end}</p>
                </div>
            </div>

            
            <p>{info.description}</p>

        </div>
    )
}


export function StudyCard(props) {
    var info = props.info

    return (
        <div className='card_study'>
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

            <h5>{info.local}</h5>
        </div>
    )
}