import React from 'react';
import './portfolio.css'
import DotsAndBoxes from '../../assets/DOTS.png'
import LandPage from '../../assets/landpage.png'
import NetflixClone from '../../assets/netflixClone.png'
import TaskManager from '../../assets/taskManager.png'

const Portfolio = () => {
  const urlGitBase = 'https://github.com/dmaxadu/';
  return (
    <section id='portfolio'>
      <h5>Meus Projetos</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={DotsAndBoxes} alt='DotsAndBoxes'/>
          </div>
          <h3>Dots And Boxes</h3>
          <a href={urlGitBase + 'dotsandboxes'} target="_blank" rel="noreferrer" className='btn'>GitHub</a>
          {/* <a href="" target="_blank" rel="noreferrer" className='btn btn-primary'>Live Demo</a> */}
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={LandPage} alt='DotsAndBoxes'/>
          </div>
          <h3>Primeira Landpage</h3>
          <a href={urlGitBase + 'landpage-with-html-css'} target="_blank" rel="noreferrer" className='btn'>GitHub</a>
          {/* <a href="" target="_blank" rel="noreferrer" className='btn btn-primary'>Live Demo</a> */}
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={NetflixClone} alt='DotsAndBoxes'/>
          </div>
          <h3>Clone Netflix</h3>
          <a href={urlGitBase + 'NetflixClone'} target="_blank" rel="noreferrer" className='btn'>GitHub</a>
          <a href="https://clonenetflixdmaxadu.netlify.app" target="_blank" rel="noreferrer" className='btn btn-primary'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={TaskManager} alt='DotsAndBoxes'/>
          </div>
          <h3>Task Manager</h3>
          <a href={urlGitBase + 'Task-Manager'} target="_blank" rel="noreferrer" className='btn'>GitHub</a>
          <a href="https://taskmanagerdmaxadu.netlify.app" target="_blank" rel="noreferrer" className='btn btn-primary'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">

          </div>
          <h3>Meu Portfolio</h3>
          <a href={urlGitBase + 'personal-portfolio'} target="_blank" rel="noreferrer" className='btn'>GitHub</a>
          <a href="https://danielmachado.netlify.app" target="_blank" rel="noreferrer" className='btn btn-primary'>Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio