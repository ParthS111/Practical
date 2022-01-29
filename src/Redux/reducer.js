import {SAVE_VIDEO_DATA, FETCH_VIDEO_DATA} from './action-types';

const INITIAL_STATE = {
    loading: false,
    VideoData: [],
};
function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_VIDEO_DATA:
            return {
                ...state,
                loading: true,
            }
        case SAVE_VIDEO_DATA:
            return {
                ...state,
                loading: false,
                VideoData: action.response,
            }
      
        default:
            state;
    }
}
export default reducer;