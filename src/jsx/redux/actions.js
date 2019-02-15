import * as actionTypes from './actionTypes';
import { dispatch } from 'redux';

export const updateGridConfig = (conf) => ({
    type: actionTypes.GRID_CONFIG_UPDATE,
    payload: conf
})