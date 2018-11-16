import React, {Component} from 'react';
import BookList from './containers/book-list';
import BookDetails from './containers/book-details';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

export default class BookApp extends Component {
    render() {
        return (
            <Provider store={createStoreWithMiddleware(reducers)}>
                <div>
                    <BookList/>
                    <BookDetails/>
                </div>
            </Provider>
        );
    }
};

