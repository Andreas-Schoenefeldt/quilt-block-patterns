import { SUBCELL_UPDATE } from '../actionTypes';

const defaultSubcell = {
    colors: ['default', 'default', 'default', 'default'],
    selecteds: [false, false, false, false]
};
const initialState = {
    nextId: 2,
    id: 1,
    subcells: [
        Object.assign({}, defaultSubcell),
        Object.assign({}, defaultSubcell),
        Object.assign({}, defaultSubcell),
        Object.assign({}, defaultSubcell)
    ]
};

export default function(state = initialState, action) {

    switch (action.type) {
        case SUBCELL_UPDATE:
            const newState = Object.assign({}, state);
            newState.subcells[action.payload.subCellId] = action.payload.config;
            return newState;
            break;
    }

    return state;
}