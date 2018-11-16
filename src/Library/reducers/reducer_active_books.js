export default function(state = null, action) {

    switch (action.type) {
        case 'BOOK_SELECT':

            return action.payload;
        default:
            return state;
    }

    return state;
}


