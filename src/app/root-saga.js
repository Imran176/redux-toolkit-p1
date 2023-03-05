import { all, call } from "redux-saga/effects";

import { postSagas } from "../features/posts/postSagas";

export default function* rootSaga() {
  yield all([call(postSagas)]);
}
