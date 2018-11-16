import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux'
import {blogAction} from '../actions'
import {Link} from "react-router-dom";

class PostsContainer extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPost() {
        return _.map(this.props.posts, (post) => {
            console.log(post)
            return (
                <li key={post.id}>
                    {post.title}
                </li>
            )
        })
    }

    render() {

        return (
            <div>
                <h3>POSTS LIST</h3>

                <Link to={'/blog/newPosts'}>
                    +
                </Link>
                <ul>
                    {this.renderPost()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, {fetchPosts: blogAction.fetchPost})(PostsContainer);