import React, { Fragment, useEffect } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import $ from 'jquery';
import './about_styles.scss';

export default function About() {
    return (
        <Fragment id='home_page'>
            <Container fluid className='page_container' id='home_container_2'>
                <Col id='row_container_2'>
                    <Row md='12' className='title_row'>Tools / Skills</Row>
                    <Row id='cards_row'>
                        <Col className='card'>
                            <h5 id='card_title'>Tools</h5>
                            <CardLevel title='R' level={4} />
                            <CardLevel title='Python' level={1} />
                            <CardLevel title='SQL' level={1} />
                            <CardLevel title='React JS' level={3} />
                            {/* <CardLevel title='Flutter' level={1} /> */}
                        </Col>
                        <Col className='card'>
                            <h5 id='card_title'>Skills</h5>
                            <CardLevel title='Statistics' level={4} />
                            <CardLevel title='Data Visualization' level={4} />
                            <CardLevel title='Machine Learning' level={2} />
                            <CardLevel title='Web development' level={3} />
                        </Col>
                        <Col className='card'>
                            <h5 id='card_title'>Idiomas</h5>
                            <CardLevel title='Português' level={5} />
                            <CardLevel title='inglês' level={3} />
                            <CardLevel title='Espanhol' level={2} />
                        </Col>
                    </Row>
                </Col>

            </Container>

        </Fragment>
    )
}

export function CardLevel(props){
    return(
        <div className='card_row'>
        <h5>{props.title}</h5>
        <Level skill={props.title} level={props.level} />
    </div>
    )
}

export function Level(props) {

    var skill = props.skill.split(' ').join('_')
    console.log(skill)

    useEffect(() => {
        for(var i = 1; i <= props.level; i++){
            $(`#${skill}_${i}`).addClass('active')
        }
    },[])

    return (
        <div className='levels'>
            <div className='square' id={skill + '_1'}></div>
            <div className='square' id={skill + '_2'}></div>
            <div className='square' id={skill + '_3'}></div>
            <div className='square' id={skill + '_4'}></div>
            <div className='square' id={skill + '_5'}></div>
        </div>
    )
}