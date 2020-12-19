import { put, takeLatest, all, select } from 'redux-saga/effects';
import selector from '../selectors';


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
function* actionWatcher() {
    yield takeLatest('SAVE_FORM_DATA', saveFormData)
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}