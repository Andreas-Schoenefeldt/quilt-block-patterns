const initialState = {
    config: {
        width: 5,
        height: 5
    },

    cells: { }
};

export default function(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}