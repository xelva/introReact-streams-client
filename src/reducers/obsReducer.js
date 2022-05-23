import { STREAM_LOADED } from "../actions/types";

const IS_LOADED = {
    isLoaded: false
}

export default (state = IS_LOADED, action) => {
    switch (action.type) {
        case STREAM_LOADED:
            return {...state, isLoaded: true}
        default: 
            return state;
    }
}