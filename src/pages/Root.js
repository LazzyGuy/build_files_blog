import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link   } from 'react-router-dom';
import Blog from "./Blog"
import Home from "./Home"

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
]

const projectList = [
    {
        link: "http://blog.com/1",
        name: "Integer nec mollis sem.",
        title: "yo yo meter"
    },
    {
        link: "http://blog.com/2",
        name: "ibus viverra. Vestibulum at",
        title: "another one"
    },
    {
        link: "http://blog.com/3",
        name: "Fusce gravida orc",
        title: "one more"
    }
]


const social = [
    {
        name: 'github',
        link: 'github.com'
    },
    {
        name: 'linkedin',
        link: 'linkedin.com'
    },
    {
        name: 'twitter',
        link: 'twittwe.com'
    },
    {
        name: 'CV',
        link: 'asdflk.com'
    }
]

const blogContainer = ({ match }) => (
    <div> <Blog blogId={match.params.blogId}/> </div>
)

export default class extends Component {

    getBlogData(){
        return blogList.map((item)=>
            <li className="blog-list" key={item.link}>
                <span className="blog-data">{item.date}</span>
                -
                <Link to={`/blog/${item.id}`} className="blog-link">{item.title}</Link>
            </li>
        )
    }

    getProjectData(){
        return projectList.map((item)=>
            <li className="project-list" key={item.link}>
                <Link to={item.link} className="project-link">{item.title}</Link>
                ,
                <span className="project-data">{item.name}</span>
            </li>
        )
    }

    getSocialList() {
        return social.map((item) => 
            <li className="social-list" key={item.link}>
                <Link to={item.link} className="social-link">{item.name}</Link>
            </li>
        )
    }

    render() {
        return (
            <Router>
                <div>
                    <Route path="/" exact render={() => <Home blog={this.getBlogData()} project={this.getProjectData()} social={this.getSocialList()}/>}/>
                    <Route path="/blog/:blogId" component={blogContainer} />
                </div>
            </Router>
        );
    }
}
