import React from 'react';
import { Link } from 'react-router-dom';
import showdown from 'showdown';
import Loader from '../components/Loader';
import Bird from '../components/Birds';
import ProgressBar from '../components/ProgressBar';

const Swag = () => {
	return (
		<aside className="swag">
			<Bird />
			<img
				src="https://pbs.twimg.com/profile_images/1049679826280468482/2zjLeoTw_400x400.jpg"
				alt="yoyome"
			/>
			<p>
				Hi, I am suraj I love exploring and making fun stuff.
				<br />
				Currently I am playing with various technology in my job and I
				like writing about it occasionally. <br /> Contact me{' '}
				<a href="mailto:igenjarus@outlook.com">here</a>. Peace ✌️
			</p>
		</aside>
	);
};

class Blog extends React.Component {
	constructor(props) {
		super(props);
		this.articleRef = React.createRef();
		this.state = {
			blogId: this.props.blogId,
			contentRendered: false,
			content: '',
			metadata: {}
		};
	}

	convertToHtml(text) {
		const converter = new showdown.Converter();
		const _content = converter.makeHtml(text);
		this.setState({
			content: _content,
			contentRendered: true
		});
	}
	componentWillMount() {
		let _id = this.props.blogId;
		const url = window.getbloguri(_id);

		this.setState({
			metadata: url
		});
		fetch(url.url)
			.then(data => data.text())
			.then(res => this.convertToHtml(res));
	}
	render() {
		return this.state.contentRendered ? (
			<React.Fragment>
				<main ref={this.articleRef}>
					<ProgressBar
						color="#000"
						styles="solid"
						width={8}
						contentRef={this.articleRef}
					/>
					<Link to="/">home</Link>
					<br />
					<br />
					<span className="blog-date-main">
						Created: {this.state.metadata.created}
					</span>
					<article
						className="main-article"
						dangerouslySetInnerHTML={{ __html: this.state.content }}
					/>
					<hr />
					<Swag />
				</main>
			</React.Fragment>
		) : (
			<Loader />
		);
	}
}
export default Blog;
