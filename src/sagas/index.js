import { put, takeLatest, call, all, select } from 'redux-saga/effects';
import selector from '../selectors';
import * as types from '../actions/authentication';


function* saveFormData() {
    console.log('Hardik into sagas')
    let valInSagas = yield select(selector.makeSelectFromOneVar());
    let rollString = JSON.stringify(valInSagas);

    const headerParams = {
        "Content-Type": "application/json"
      };

    const json = yield fetch('https://ad-enterprise.firebaseio.com/rolluses.json', {
        method: 'POST',
        body: rollString,
        headerParams: headerParams
    })
        .then(response => response.json(),);
}


export function* registerSaga(payload) {
    try {
      const response = yield call('registerUserService', payload);
      yield [
        put({ type: types.REGISTER_USER_SUCCESS, response })
      ];
    } catch(error) {
      yield put({ type: types.REGISTER_USER_ERROR, error });
    }
  }
  
  export function* loginSaga(payload) {
    try {
      const response = yield call('loginUserService', payload);
      yield [
        put({ type: types.LOGIN_USER_SUCCESS, response })
      ];
    } catch(error) {
      yield put({ type: types.LOGIN_USER_ERROR, error })
    }
  }



function* actionWatcher() {
    yield takeLatest('SAVE_FORM_DATA', saveFormData);
    yield takeLatest(types.REGISTER_USER, registerSaga);
    yield takeLatest(types.LOGIN_USER, loginSaga);
}


export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}