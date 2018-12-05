import React from "react";
import { Link } from "react-router-dom";
import { getbloguri } from "../bloglist.js";
import showdown from "showdown";

class Blog extends React.Component {
  state = {
    blogId: this.props.blogId,
    contentRendered: false,
    content: ""
  };

  convertToHtml(text) {
    const converter = new showdown.Converter();
    const _content = converter.makeHtml(text);
    this.setState({
      content: _content,
      contentRendered: true
    });
  }

  async componentWillMount() {
    const url = getbloguri(this.props.blogId);
    fetch(url)
      .then(data => data.text())
      .then(res => this.convertToHtml(res));
  }
  render() {
    return this.state.contentRendered ? (
      <React.Fragment>
        <main>
          <Link to="/">home</Link>
          <br />
          <article dangerouslySetInnerHTML={{ __html: this.state.content }} />
        </main>
      </React.Fragment>
    ) : (
      <div> Loading.. </div>
    );
  }
}
export default Blog;
