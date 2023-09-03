import React from "react";
import "./portfolio.css";
import IMGdata from "./Image";
import wip from "../../assets/wip.png";
import crow from "../../assets/CROW.png";
export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article key="0" className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={wip} alt="W.I.P." />
          </div>
          <h3>W.I.P.</h3>
          <div className="portfolio__item-cta">
            <button className="btn-inActive">
              Github
                </button>
            <button
              className="btn-inActive"
            >
              Live Demo
                </button>
          </div>
        </article>
        {
          IMGdata.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn">
                    Github
                </a>
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                </a>
                </div>
              </article>
            );
          })
        }
        <article key="4" className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={crow} alt="CRUD app (PHP)" />
          </div>
          <h3>CRUD app (PHP)</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/MarsGotBars/CRUD" className="btn">
              Github
                </a>
            <button
              className="btn-inActive"
            >
              Live Demo
                </button>
          </div>
        </article>
      </div>
    </section>
  );
}
