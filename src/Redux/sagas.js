import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {SAVE_VIDEO_DATA, FETCH_VIDEO_DATA} from './action-types';
import {saveVideoData} from './action'

function* fetchSmurfs(){
   yield put(testPutFunction());
}

function* fetchVideoData(){
  console.log('navigation')
    try {
        const url='https://private-c31a5-task27.apiary-mock.com/videos'
        const response = yield call(fetch,url)
        const data= yield response.json()
        console.log(data,'54554545')
        yield put(saveVideoData(data.videos))
        
    } catch (error) {
        alert(JSON.stringify(error))
        
    }
}

function* sagas(){
    yield takeLatest(FETCH_VIDEO_DATA, fetchVideoData);
}

export default sagas;