import {
    ADD_ITEM,
    DELETE_ITEM,
    EDIT_ITEM,
    GET_ITEM,
} from "../Constants/actionTypes";

export const addItem = (contact) => {
    return {
        type: ADD_ITEM,
        payload: contact,
    };
};
export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: id,
    };
};
export const editItem = (id) => {
    return {
        type: EDIT_ITEM,
        payload: id,
    };
};

export const getItem = (id) => {
    return {
        type: GET_ITEM,
        payload: id,
    };
};
