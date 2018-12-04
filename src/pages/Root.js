import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Blog from "./Blog";
import Home from "./Home";

const blogList = [
  {
    id: 1,
    title: "get justo sollicitudin",
    date: "12-23-2018"
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    date: "12-23-2018"
  },
  {
    id: 3,
    title: "vehicula sodales. Phasellus loborti",
    date: "12-23-2018"
  }
];

const projectList = [
  {
    link: "https://github.com/LazzyGuy/Threejs-Editor",
    name: "A threejs based web Editor",
    title: "Threejs Editor"
  },
  {
    link: "https://github.com/LazzyGuy/banyanTreeBeta",
    name: "A connectivity platform for Students & teachers",
    title: "Banyan Tree"
  },
  {
    link: "http://nowhere.com",
    name: "A CV based suduku solvers",
    title: "Suduku Solver"
  }
];

const social = [
  {
    name: "github",
    link: "https://github.com/LazzyGuy"
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/itssurajnegi"
  },
  {
    name: "twitter",
    link: "https://twitter.com/itssurajnegi"
  },
  {
    name: "CV",
    link: `${process.env.PUBLIC_URL}/cv_surajnegi.pdf`
  }
];

const blogContainer = ({ match }) => (
  <div>
    {" "}
    <Blog blogId={match.params.blogId} />{" "}
  </div>
);

export default class extends Component {
  getBlogData() {
    return blogList.map(item => (
      <li className="blog-list" key={item.id}>
        <span className="blog-data">{item.date}</span>-
        <Link to={`/blog/${item.id}`} className="blog-link">
          {item.title}
        </Link>
      </li>
    ));
  }

  getProjectData() {
    return projectList.map(item => (
      <li className="project-list" key={item.link}>
        <a
          href={item.link}
          rel="noopener noreferrer"
          target="_blank"
          className="project-link"
        >
          {item.title}
        </a>
        ,<span className="project-data">{item.name}</span>
      </li>
    ));
  }

  getSocialList() {
    return social.map(item => (
      <li className="social-list" key={item.link}>
        <a
          href={item.link}
          rel="noopener noreferrer"
          target="_blank"
          className="social-link"
          download
        >
          {item.name}
        </a>
      </li>
    ));
  }

  render() {
    return (
      <Router>
        <div>
          <Route
            path="/"
            exact
            render={() => (
              <Home
                blog={this.getBlogData()}
                project={this.getProjectData()}
                social={this.getSocialList()}
              />
            )}
          />
          <Route path="/blog/:blogId" component={blogContainer} />
        </div>
      </Router>
    );
  }
}
