import React, { Component } from 'react';
import Axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        post: null
    }

    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.post || (this.state.post && this.state.post.id !== this.props.id)) {
                Axios.get('/posts/' + this.props.id).then((res) => {
                    this.setState({post: res.data, postLoaded: true});
                });
            }           
        }
    }

    onDeletePostHandler = (id) => {
        Axios.delete('/posts/' + this.props.id).then((res) => {
            console.log(res);
        });
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.id) {
            post = <p style={{textAlign: 'center'}}>Loading</p>;
        }
        if (this.state.post) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.onDeletePostHandler}>Delete</button>
                    </div>
                </div>
    
            );
        }
        
        return post;
    }
}

export default FullPost;