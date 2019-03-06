import React from 'react';
import Blog from './Blog';
import { Link, Route } from 'react-router-dom';
import Bird from '../components/Birds';
export default class extends React.Component {
	componentDidMount() {
		document.addEventListener('keydown', e => console.log(e.keyCode));
	}

	render() {
    const d = new Date()
		return (
			<React.Fragment>
				<main>
					<Bird />
					<section className="intro">
						<h1>Suraj Negi</h1>
						<p>
							Software Engineer at{' '}
							<a
								href="http://www.acroknacks.com/"
								rel="noopener noreferrer"
								target="_blank"
							>
								Acroknacks
							</a>{' '}
							Alumni of{' '}
							<a
								href="https://www.gehu.ac.in"
								rel="noopener noreferrer"
								target="_blank"
							>
								graphic era hill university.
							</a>
						</p>
						<ul>{this.props.social}</ul>
						<br />
						<h1>Motto</h1>
						<blockquote>
							<p>
								We are what we repeatedly do. <br /> Excellence,
								then, is not an act, but a habit.
							</p>
							<cite>Aristotle</cite>
						</blockquote>
						<br />
					</section>
					<section className="blog">
						<h1>Blog</h1>
						<Link to="/allpost">All posts</Link>
						<br />
						<br />

						<ul>{this.props.blog}</ul>
						<br />
					</section>
					<section className="projects">
						<h1>Projects</h1>
						<ul>{this.props.project}</ul>
					</section>
					<hr />
					<Route path="/blog/1/" component={Blog} />
				</main>

				<footer>Copyright &copy; {d.getFullYear()} Suraj Negi</footer>
			</React.Fragment>
		);
	}
}
