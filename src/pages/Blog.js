import React from "react";
import { Link } from "react-router-dom";

class Blog extends React.Component {
  fetchItem() {
    fetch(
      "https://gist.githubusercontent.com/LazzyGuy/a741a1d285cf8799ecad3aa6007a37f8/raw/b72be9a4e9b2e29cbe426ee4bf37b7416fc3b85f/text.json",
      {
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      }
    )
      .then(res => res.json())
      .then(data => console.log(data));
  }

  ComponentDidMount() {
    this.fetchItem();
  }

  render() {
    return (
      <React.Fragment>
        <main>
          <Link to="/">home</Link>
          <br />
          {this.props.blogId}
        </main>
      </React.Fragment>
    );
  }
}

export default Blog;
