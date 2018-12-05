import React from "react";
import Blog from "./Blog";
import { Link, Route } from "react-router-dom";

export default class extends React.Component {
  render() {
    return (
      <React.Fragment>
        <main>
          <section className="intro">
            <h1>Suraj Negi</h1>
            <p>
              Software Engineer at{" "}
              <a
                href="http://www.acroknacks.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Acroknacks
              </a>{" "}
              working on Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Pellentesque ultricies vehicula sodales. Phasellus lobortis
              pellentesque ornare. Proin commodo tellus eget odio mollis, non
              volutpat libero ultrices. In iaculis lectus eget justo
              sollicitudin
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
