import { GRID_CONFIG_UPDATE } from '../actionTypes';

const initialState = {
    config: {
        width: 5,
        height: 5
    },

    cells: { }
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GRID_CONFIG_UPDATE:
            return Object.assign({}, state, {config: Object.assign({}, state.config, action.payload)});
        default:
            return state;
    }
}