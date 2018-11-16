import React, {Component} from 'react';
import {applyMiddleware, createStore} from 'redux';
import ReduxPromise from 'redux-promise';
import {Provider} from 'react-redux';
import reducers from './reducers';
import {withStyles} from '@material-ui/core/styles';
/*
import '../../style/weather.css';
*/
import PostsContainer from "./component/PostsContainer.jsx";
import {Redirect, Route, Switch, withRouter} from "react-router";
import PostsNew from "./component/PostsNew.jsx";
import NoMatch from "../noMatch";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const styles = {
    root: {
        marginTop: 10,
    },
};

class BlogApp extends Component {
    render() {
        const {classes, match} = this.props;

        console.log("-----------------")
        console.log(this.props)
        return (
            <Provider store={createStoreWithMiddleware(reducers)}>
                <div className={classes.root}>
                    <Switch>
                        <Route exact path={`/blog`} component={PostsContainer}/>
                        <Route exact path={`/blog/newPosts`} component={PostsNew}/>
                    </Switch>

{/*
                    <Redirect from={`${match.url}/posts/new`} to={`${match.url}/posts/new`} />
*/}
                </div>
            </Provider>
        );
    }
}

export default withRouter(withStyles(styles)(BlogApp));
