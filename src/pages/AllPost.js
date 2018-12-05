import React from "react";
import { bloglist } from "../bloglist.js";
import { Link } from "react-router-dom";

class AllPost extends React.Component {
  getAllBlog() {
    return bloglist.map(item => {
      return (
        <li className="blog-list" key={item.id}>
          <span className="blog-data">{item.created}</span>-
          <Link to={`/blog/${item.id}`} className="blog-link">
            {item.name}
          </Link>
        </li>
      );
    });
  }
  render() {
    return (
      <main>
        <h1>All Post</h1>
        <Link to="/">Home</Link>
        <ul>{this.getAllBlog()}</ul>
      </main>
    );
  }
}

export default AllPost;
