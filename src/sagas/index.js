import { put, takeLatest, all, select } from 'redux-saga/effects';
import selector from '../selectors';


function* saveFormData() {
    console.log('Hardik into sagas')
  const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
  .then(response => response.json(), );
  debugger;
  let valInSagas = yield select(selector.makeSelectFromOneVar());

  console.log("Montu hardo ",valInSagas);
}
function* actionWatcher() {
     yield takeLatest('SAVE_FORM_DATA', saveFormData)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}
