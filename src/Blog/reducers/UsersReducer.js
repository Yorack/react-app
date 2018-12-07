import { blogActionType } from '../actions';
import _ from 'lodash';

export default function (state = [], action) {
    switch (action.type) {
        case blogActionType.FETCH_USER:
            return [...state, action.payload];
        default:
            return state
    }
}