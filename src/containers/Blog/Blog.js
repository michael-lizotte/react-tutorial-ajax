import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../wrappers/asyncComponent';
// import NewPost from './NewPost/NewPost';

const NewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
})

class Blog extends Component {
    state = {
        auth: true
    }

    render () {        
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><NavLink 
                                    to="/posts" 
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

            <Switch>
                {this.state.auth ? <Route path="/new-post" exact component={NewPost} /> : null}
                <Route path="/posts" component={Posts} />
                <Route render={() => <h1>404 page not found</h1>} />
            </Switch>
                {/* <Redirect from="/" to="/posts" /> */}
            </div>
        );
    }
}

export default Blog;