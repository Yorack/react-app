import {combineReducers} from 'redux'
import PostsReducer from './PostsReducer'
import UsersReducer from './UsersReducer'

const rootReducer = combineReducers({
    posts: PostsReducer,
    users: UsersReducer
});

export default rootReducer;