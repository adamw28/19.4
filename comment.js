function comments(state = initialState, action) {
    switch (action.type) {
        case ADD_COMMENT:
        case EDIT_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }, ...state.comments];
        case REMOVE_COMMENT:
            return [{
                comments: state.comments.filter(comment => comment.id !== action.id)
            }];
        case THUMB_COMMENT:
            return [{
                    id: action.id,
                    thumb,
                    votes
                },
                ...state.comments
            ];
        default:
            return state;
    }
}