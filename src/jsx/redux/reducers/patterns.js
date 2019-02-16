import { PATTERN_ADD, PATTERN_DELETE, PATTERN_CHANGE_COLOR, COLOR_PICKER_SHOW } from "../actionTypes";

const initialState = {
    nextId: 1,
    pickerActiveFor: false,
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
            console.log(action);
            return Object.assign({}, state, { pickerActiveFor: action.payload.patternId });
        default:
            return state;
    }

}