import React from 'react';
import './about.css'
import ME from '../../assets/IMG_7243.jpg'
import {MdRecordVoiceOver} from 'react-icons/md'
import {FaUsers} from 'react-icons/fa'
import {FaUserGraduate} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Saiba Mais</h5>
      <h2>Sobre Mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <MdRecordVoiceOver className='about__icon'/>
              <h5>Comunicação</h5>
              <small>Facilidade para me comunicar</small>
            </article>
            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Trabalho em Equipe</h5>
              <small>Desenvolvo com facilidade</small>
            </article> 
            <article className='about__card'>
              <FaUserGraduate className='about__icon'/>
              <h5>Formação</h5>
              <small>Ciência da Computação - UFRJ</small>
            </article>
          </div>
          <p>
            Opa! Meu nome é Daniel Machado, tenho 22 anos. 
            Sou estudante de Ciências da Computação na Universidade Federal do Rio de Janeiro e atualmente me especializando em desenvolvimento FrontEnd. 
            Sempre gostei de design, programação, criar layouts, templates e etc, e por isso decidi me especializar e tornar isso uma profissão!
          </p>
          <div className="btn__about__devices">
            <a href='#contact' id="btn__about__devices" className='btn btn-primary'>Vamos conversar?</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About