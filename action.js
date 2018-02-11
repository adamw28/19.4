import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_COMMENT = 'THUMB_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}
const boundAddComment = text => dispatch(addComment(text));

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id,
    }
}
const boundRemoveComment = id => dispatch(removeComment(id));

function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
}
const boundEditComment = (text,id) => dispatch(editComment(text,id));

function thumbComment(thumb, id) {
    return {
        type: THUMB_COMMENT,
        thumb: thumb, // parametr thumb przekazywany do funkcji byłby 'up' lub 'down'
        id
    }
}
const boundThumbComment = (thumb,id) => dispatch(thumbComment(thumb,id));