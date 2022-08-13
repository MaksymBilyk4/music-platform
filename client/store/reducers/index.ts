import {combineReducers} from "redux";
import {playerReducer} from "./playerReducer";
import {HYDRATE} from "next-redux-wrapper";

export const rootReducer = combineReducers({
    player: playerReducer,
});

export const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextStep = {
            ...state,
            ...action.payload,
        }
        if (state.count) nextStep.count = state.count
        return nextStep
    } else {
        return rootReducer(state, action);
    }
}

export type RootState = ReturnType<typeof rootReducer>;