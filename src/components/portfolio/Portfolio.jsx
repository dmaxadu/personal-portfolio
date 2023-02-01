import React from 'react';
import './portfolio.css'
import IMG1 from '../../assets/DOTS.png'
import IMG2 from '../../assets/landpage.png'
import IMG3 from '../../assets/netflixClone.png'
import IMG4 from '../../assets/taskManager.png'
import IMG5 from '../../assets/meuPortfolio.png'
import IMG6 from '../../assets/IMG6.png'
import IMG7 from '../../assets/IMG7.png'
import IMG8 from '../../assets/IMG8.png'

const urlGitBase = 'https://github.com/dmaxadu/';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Dots and Boxes',
    github: urlGitBase + 'dotsandboxes',
    demo: urlGitBase + 'dotsandboxes'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Landpage',
    github: urlGitBase + 'landpage-with-html-css',
    demo: 'https://landingpagedmaxadu.netlify.app'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Clone Netflix',
    github: urlGitBase + 'NetflixClone',
    demo: 'https://clonenetflixdmaxadu.netlify.app'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Task Manager',
    github: urlGitBase + 'Task-Manager',
    demo: 'https://taskmanagerdmaxadu.netlify.app'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Meu Portfolio',
    github: urlGitBase + 'personal-portfolio',
    demo: 'https://danielmachado.netlify.app'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Imagine Dragons\'s Concert Countdown',
    github: urlGitBase + 'countdown-javascript',
    demo: 'https://countdownidconcert.netlify.app/'
  },
  {
    id: 7,
    image: IMG7,
    title: 'Calculator',
    github: urlGitBase + 'calculadora-javascript',
    demo: 'https://luminous-blini-13ecf9.netlify.app/'
  },
  {
    id: 8,
    image: IMG8,
    title: 'Letter Counter',
    github: urlGitBase + 'letter-counter-javascript',
    demo: 'https://countletter.netlify.app/'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meus Projetos</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} target="_blank" rel="noreferrer" className='btn'>GitHub</a>
                  <a href={demo} target="_blank" rel="noreferrer" className='btn btn-primary'>Live Demo</a>
                </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
