import { combineReducers } from "redux";
import patterns from './patterns';
import grid from './grid';
import blocks from './blocks';

export default combineReducers({ grid, blocks, patterns });

/** Let's check out the state data structure

 {
    grid: { config: {width: 5, height: 5}, cells: {x_y: {blockId: x , orientation: 0 - 3 } } },
    blocks: {
        id: {

        }
    }
    patterns: {
        id: {
            id: xyz
            color: '#FFF'
        }
    }
 }


 */
