export const getGridConfigState = (store) => store.grid.config;

export const getPatterns = (store) => store.patterns.allIds;
export const getPattern = (store, patternId) => store.patterns.byId[patternId];


