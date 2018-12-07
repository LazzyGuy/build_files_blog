import React from "react";
import Blog from "./Blog";
import { Link, Route } from "react-router-dom";
import Bird from "../components/Birds";
export default class extends React.Component {
  render() {
    return (
      <React.Fragment>
        <main>
          <Bird />
          <section className="intro">
            <h1>Suraj Negi</h1>
            <p>
              Software Engineer intern at{" "}
              <a
                href="http://www.acroknacks.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Acroknacks
              </a>{" "}
              working on several projects, ranging from Web
              Development to Image Processing. Alumni of{" "}
              <a
e
              >
                graphic era hill university.
              </a>
            </p>
            <ul>{this.props.social}</ul>
          </section>
          <section className="blog">
            <h1>Blog</h1>
            <Link to="/allpost">All posts</Link>
            <br />
            <br />

            <ul>{this.props.blog}</ul>
          </section>
          <section className="projects">
            <h1>Projects</h1>
            <ul>{this.props.project}</ul>
          </section>
          <hr />
          <Route path="/blog/1/" component={Blog} />
        </main>
      </React.Fragment>
    );
  }
}
