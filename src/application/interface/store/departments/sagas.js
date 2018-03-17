import { all } from 'redux-saga/effects';
// Blockchain Integrations
import symbiosis from 'assimilation/symbiosis/sagas'
export default function* rootSaga() {
  yield all([
    ...symbiosis
  ]);
}