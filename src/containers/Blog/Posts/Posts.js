import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Axios from '../../../axios';

import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: [],
        currentPost: null,
        error: false
    }

    onPostClicked = (id) => {
        this.setState({currentPost : id});
    }
    
    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>
        if(!this.state.error) {
            posts = this.state.posts.map(post => {    
            return (
                <Link 
                    key={post.id}
                    to={this.props.match.url + "/" + post.id}>
                    <Post
                        title={post.title}
                        author={post.author}
                        clicked={() => this.onPostClicked(post.id)}/>
                </Link>             
            )
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + "/:id"} component={FullPost} />
            </div>
        );
    }

    componentDidMount() {
        Axios.get('/posts').then((res) => {
            const posts = res.data.slice(0, 4);
            const updatedPost = posts.map(post => {
                return {
                    ...post,
                    author: 'Max'
                }
            })
            this.setState({posts: updatedPost})
        }).catch(error => {
            this.setState({error: true});
        });
    }
}

export default Posts;