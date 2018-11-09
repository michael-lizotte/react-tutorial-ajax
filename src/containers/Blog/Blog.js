import React, { Component } from 'react';
// import Axios from 'axios';
import Axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        currentPost: null,
        error: false
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
            // console.log(error);
            this.setState({error: true});
        });
    }

    onPostClicked = (id) => {
        this.setState({currentPost : id});
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>
        if(!this.state.error) {
            posts = this.state.posts.map(post => {
            return <Post
                key={post.id}
                title={post.title}
                author={post.author}
                clicked={() => this.onPostClicked(post.id)}/>
            });
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.currentPost} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;