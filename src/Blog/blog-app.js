import React, {Component} from 'react';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducers from './reducers';
import {withStyles} from '@material-ui/core/styles';
import {Redirect, Route, Switch, withRouter} from "react-router";
import PostsNew from "./component/PostsNew.jsx";
import PostsLists from "./component/PostsLists.jsx";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const styles = {
    root: {
        marginTop: 10,
    },
};

class BlogApp extends Component {
    render() {
        const {classes, match} = this.props;

        return (
            <Provider store={createStoreWithMiddleware(reducers)}>
                <div className={classes.root}>
                    <Switch>
                        <Route exact path={`/blog`} component={PostsLists}/>
                        <Route exact path={`/blog/newPosts`} component={PostsNew}/>
                    </Switch>
                </div>
            </Provider>
        );
    }
}

export default withRouter(withStyles(styles)(BlogApp));
