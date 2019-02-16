import { PATTERN_ADD, PATTERN_DELETE, PATTERN_CHANGE_COLOR, COLOR_PICKER_SHOW } from "../actionTypes";

const initialState = {
    nextId: 2,
    pickerActiveFor: false,
    allIds: ['default', 1],
    byId: {
        'default': {
            id: 'default',
            color: '#fff',
            name: 'Hintergrund'
        },
        1: {
            id: 1,
            color: '#000',
            name: 'Vordergrund 1'
        }
    }
};

export default function(state = initialState, action) {

    switch (action.type) {

        case PATTERN_ADD:
            const newState = Object.assign({}, state);
            const id = state.nextId;
            const newPattern = {
                id: id,
                color: action.payload.color,
                name: ''
            };

            newState.allIds.push(id);
            newState.byId[id] = newPattern;
            newState.nextId++;

            return newState;
        case COLOR_PICKER_SHOW:
            return Object.assign({}, state, { pickerActiveFor: action.payload.patternId });
        case PATTERN_CHANGE_COLOR:
            if (action.payload.patternId !== 'NEW') {
                const newState = Object.assign({}, state);

                for (let id in newState.byId) {
                    if (newState.byId[id].id === action.payload.patternId) {
                        newState.byId[id].color = action.payload.color;
                    }
                }
                return newState;
            } else {
                return state;
            }
    }

    return state;
}