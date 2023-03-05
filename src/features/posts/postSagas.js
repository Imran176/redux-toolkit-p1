import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchAsyncPosts, fetchAsyncPhotos } from "./postSlice";
import {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
  fetchPhotosStart,
  fetchPhotosSuccess,
  fetchPhotosFailure,
} from "./postSlice";

export function* fetchAllPostsAsync() {
  try {
    const result = yield call(fetchAsyncPosts);
    const { data } = result;
    yield put(fetchPostsSuccess(data));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

export function* fetchAllPostsStart() {
  try {
    yield takeLatest(fetchPostsStart.type, fetchAllPostsAsync);
  } catch (error) {
    console.log("Error in Posts Saga", error);
  }
}

export function* fetchAllPhotosAsync() {
  try {
    const response = yield call(fetchAsyncPhotos);
    const { data } = response;
    yield put(fetchPhotosSuccess(data));
  } catch (error) {
    yield put(fetchPhotosFailure(error.message));
  }
}

export function* fetchAllPhotosStart() {
  try {
    yield takeLatest(fetchPhotosStart.type, fetchAllPhotosAsync);
  } catch (error) {
    console.log("Error in Photos Saga", error);
  }
}

export function* postSagas() {
  yield all([call(fetchAllPostsStart), call(fetchAllPhotosStart)]);
}
