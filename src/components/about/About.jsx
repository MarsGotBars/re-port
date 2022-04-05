import React from 'react';
import './about.css';
import ab_ME from '../../assets/test.png'
import {FaAward, FaGlobe, FaUserCheck} from 'react-icons/fa'
export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ab_ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon"/>
                <h5>Experience</h5>
                <small>2 years as a student</small>
              </article>

              <article className="about__card">
                <FaUserCheck className="about__icon"/>
                <h5>Projects</h5>
                <small>20~ Completed</small>
              </article>

              <article className="about__card">
                <FaGlobe className="about__icon"/>
                <h5>Clients</h5>
                <small>none yet</small>
              </article>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus saepe nesciunt velit, reprehenderit aspernatur architecto quaerat fuga repellat neque et. Blanditiis ducimus modi possimus magni laudantium. Et, porro illum.
            </p>
            
            <a href="#contact" className="btn btn-primary">Let's talk</a>
        </div>
      </div>
    </section>
  )
}
