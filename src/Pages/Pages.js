import React, { Fragment } from 'react';
import './pages_styles.scss';
import { SiWhatsapp } from 'react-icons/si';

import Home from '../Components/Home/00home';
import About from '../Components/About/about';
import Projects from '../Components/Projects/projects';
import Experience from '../Components/Experience/Experience';

export default function Pages() {

    return (
        <Fragment id='home_page'>
            <Home />
            <Fragment>
                <div id='sticky_icon' >
                    <Contact />
                </div>
                <About />
                <Experience />
                {/* <Projects /> */}
            </Fragment>

        </Fragment >
    )
}


export function Contact() {
    return (
        <div id='wpp_btn'>
            <a href=' https://wa.me/+5544997255141' target='_blank'>
                <SiWhatsapp size='5vh' />
            </a>
        </div>
    )
}