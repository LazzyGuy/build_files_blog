import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Blog from "./Blog";
import Home from "./Home";
import AllPost from "./AllPost";
import Error from "../components/Error";

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
    name: "CV(pdf)",
    link: `${process.env.PUBLIC_URL}/cv_surajnegi.pdf`
  }
];

//const blogContainer = ({ match }) => <Blog blogId={match.params.blogId} />;

export default class extends Component {
  getBlogData() {
    return window.latestBlog.map(item => (
      <li className="blog-list" key={item.id}>
        <span className="blog-data">{item.created}</span>-
        <Link to={`/blog/${item.id}`} className="blog-link">
          {item.name}
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
        <Switch>
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
          <Route path="/(allpost|blog)/" exact component={() => <AllPost />} />
          <Route
            path="/blog/:blogId/"
            component={({ match }) => <Blog blogId={match.params.blogId} />}
          />
        </Switch>
      </Router>
    );
  }
}
