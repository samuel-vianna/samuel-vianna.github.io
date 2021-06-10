import React, { Fragment, useEffect } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import $ from 'jquery';
import './about_styles.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function About() {

    useEffect(() => {
        Aos.init({ duration: 500 });
    }, []);

    const json_tools = [
        {
            title: 'R',
            level: 4,
        },
        {
            title: 'Python',
            level: 1,
        },
        {
            title: 'SQL',
            level: 1,
        },
        {
            title: 'React Js',
            level: 3,
        }
    ]

    const json_skills = [
        {
            title: 'Statistics',
            level: 4,
        },
        {
            title: 'Data Visualization',
            level: 4,
        },
        {
            title: 'Machine Learning',
            level: 2,
        },
        {
            title: 'Web development',
            level: 3,
        }
    ]

    const json_lenguages = [
        {
            title: 'Português',
            level: 5,
        },
        {
            title: 'inglês',
            level: 3,
        },
        {
            title: 'Espanhol',
            level: 2,
        }
    ]

    return (
        <Fragment id='home_page'>
            <Container fluid className='page_container' id='home_container_2'>
                <Col id='row_container_2'>
                    <Row md='12' className='title_row'>Tools / Skills</Row>
                    <Row id='cards_row'>
                        <ToolCard json={json_tools} title='Tools'/>
                        <ToolCard json={json_skills} title='Skills' />
                        <ToolCard json={json_lenguages} title='Idiomas' />
                    </Row>
                </Col>

            </Container>

        </Fragment>
    )
}


export function ToolCard(props) {
    var tools = props.json
    return (
        <Col className='card' data-aos='fade-up'>
            <h5 id='card_title'>{props.title}</h5>
            {tools.map(x => {
                return (
                    <CardLevel title={x.title} level={x.level} />
                )
            })}
        </Col>
    )
}

export function Level(props) {
    var skill = props.skill.split(' ').join('_')

    useEffect(() => {
        for (var i = 1; i <= props.level; i++) {
            $(`#${skill}_${i}`).addClass('active')
        }
    }, [])

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

export function CardLevel(props) {
    return (
        <div className='card_row'>
            <p>{props.title}</p>
            <Level skill={props.title} level={props.level} />
        </div>
    )
}