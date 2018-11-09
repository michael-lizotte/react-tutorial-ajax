import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
    render () {        
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><NavLink 
                                    to="/" 
                                    exact
                                    activeStyle={{
                                        color: '#fa923f',
                                        textDecoration: 'underline'
                                    }}>Home</NavLink></li>
                            <li><NavLink to={{
                                // To build a relative path: this.props.match.url + '/new-post'
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }} activeStyle={{
                                color: '#fa923f',
                                textDecoration: 'underline'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => {return <Posts />}}/> */}
                <Route path="/" component={Posts} />
                <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;