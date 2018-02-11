import { ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_COMMENT } from './actions'
import { combineReducers } from 'redux';
import comments from './comments';
import users from './users';
const initialState = {
    comments: [],
    users: []
};
const app = combineReducers({
    comments,
    users
});

