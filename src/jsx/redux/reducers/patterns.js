import { PATTERN_ADD, PATTERN_DELETE, PATTERN_CHANGE_COLOR } from "../actionTypes";

const initialState = {
    allIds: ['default'],
    byId: {
        'default': {
            id: 'default',
            color: '#fff',
            name: 'Hintergrund'
        }
    }
};

export default function(state = initialState, action) {

    switch (action.type) {
        default:
            return state;
    }

}