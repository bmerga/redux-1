
// action types
export const INCREAMENT = "INCREAMENT"
export const DECREAMENT = "DECREAMENT"

// action creator functions

export const incrementActionCreator = () => ({
    type: INCREAMENT,
});

export const decrementActionCreator = () => ({
    type: DECREAMENT,
});