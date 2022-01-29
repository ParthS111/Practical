import {SAVE_VIDEO_DATA, FETCH_VIDEO_DATA} from './action-types';


export function fetchVideoData(){
    return {
       type: FETCH_VIDEO_DATA,
    }
}

export function saveVideoData(response){
    return {
       type: SAVE_VIDEO_DATA,
       response,
    }
}
