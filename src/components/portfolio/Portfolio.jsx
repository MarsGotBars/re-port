import React from "react";
import "./portfolio.css";
import { PortData } from "./Image";
import { GenData } from "./Image";
export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>Portfolio</h5>
      <h2>My personal work</h2>

      <div className="container portfolio__container">
        {
          PortData.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  {github ? <a href={github} className="btn">
                    Github
                  </a> : <a className="btn-inActive">
                    Github
                  </a>}
                  {demo ? <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live link
                  </a> : <a
                    className="btn-inActive"
                  >
                    Live link
                  </a>}
                </div>
              </article>
            );
          })
        }
      </div>

      <h2 className="separator">Other projects I've  worked on</h2>
      <div className="container portfolio__container">
        {
          GenData.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  {github ? <a href={github} className="btn">
                    Github
                  </a> : <a className="btn-inActive">
                    Github
                  </a>}
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live link
                  </a>
                </div>
              </article>
            );
          })
        }
      </div>
    </section>
  );
}
