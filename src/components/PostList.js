import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchPosts } from '../actions';

class PostList extends Component {

    componentDidMount () {
        this.props.fetchPosts();
    }

    renderList () {
        return this.props.posts.map(post => {
            return (
                <div key = {post.id}>
                    <ul className="collection">
                        <li className="collection-item avatar">
                        <i className="material-icons circle">account_circle</i>
                        <p className="title">{post.title}</p>
                        <p>{post.body}</p>
                        </li>
                    </ul>
                </div>
            );
        });

        
    }

    render () {
        console.log("this.props.posts: ", this.props.posts);
        return (
            <div>{this.renderList()}</div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("this is state: ", state);
    // has the property posts from the rootReducer
    return { posts: state.posts }
}

export default connect (mapStateToProps,{
    //pass in action creator
    fetchPosts
})(PostList);