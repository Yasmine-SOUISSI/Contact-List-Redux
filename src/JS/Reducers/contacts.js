import {
    ADD_ITEM,
    DELETE_ITEM,
    EDIT_ITEM,
    GET_ITEM,
} from "../Constants/actionTypes";
const initialState = {
    contacts: [
        {
            id: Math.random(),
            name: "Amal",
            cin: "14773896",
            number: "25478987",
        },
        {
            id: Math.random(),
            name: "Nessrine",
            cin: "14773876",
            number: "25477897",
        },
    ],
};
export const contactReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return { ...state, contacts: [...state.contacts, action.payload] };
        case EDIT_ITEM:
            return {};
        case GET_ITEM:
            return { ...state, user: action.payload };
        case DELETE_ITEM:
            return {
                ...state,
                contacts: state.contacts.filter(
                    (contact) => contact.id !== action.payload
                ),
            };

        default:
            return state;
    }
};
