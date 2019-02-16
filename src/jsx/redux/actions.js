import * as actionTypes from './actionTypes';
import { dispatch } from 'redux';

// grid actions

export const updateGridConfig = (conf) => ({
    type: actionTypes.GRID_CONFIG_UPDATE,
    payload: conf
});


// pattern actions
export const addPattern = (color) => ({
    type: actionTypes.PATTERN_ADD,
    payload: { color }
});

// color picker actions
export const showColorPicker = (patternId) => ({
    type: actionTypes.COLOR_PICKER_SHOW,
    payload: {patternId}
});