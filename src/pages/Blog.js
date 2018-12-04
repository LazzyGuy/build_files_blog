import React from "react";
import { Link } from "react-router-dom";

//import TOKEN from "../config.js";

class Blog extends React.Component {
  state = {
    blogId: this.props.blogId,
    content: {},
    contentRendered: false
  };
  componentWillMount() {
    fetch("", {
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(data => this.makeContent(data));
    console.log("working");
  }
  makeContent(data) {
    console.log(data);
  }
  render() {
    return this.state.contentRendered ? (
      <React.Fragment>
        <main>
          <Link to="/">home</Link>
          <br />
        </main>
      </React.Fragment>
    ) : (
      <div> Loading.. </div>
    );
  }
}
export default Blog;
