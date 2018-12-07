import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux'
import {fetchPostAndUser} from '../actions'
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {withStyles} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar/Avatar";
import UserHeader from "./UserHeader";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
        display: 'flex',
        flexDirection: 'row',
    },
    avatar: {
        margin: 10,
    },
});

class PostsLists extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPost() {
        const {classes} = this.props;

        return _.map(this.props.posts, (post) => {
            const user = _.find(this.props.users, {id: post.userId});

            return (
                <Paper key={post.id} className={classes.root} elevation={1}>
                    <Avatar className={classes.avatar}>{user ? user.name.charAt(0) : null}</Avatar>
                    <div>
                        <Typography variant="h5" component="h3">
                            {post.title}
                        </Typography>
                        <Typography component="p">
                            {post.body}
                        </Typography>
                    </div>
                    <UserHeader userId={post.userId}/>
                </Paper>
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
        posts: state.posts,
        users: state.users
    }
}

export default withStyles(styles)(connect(mapStateToProps, {fetchPosts: fetchPostAndUser})((PostsLists)));