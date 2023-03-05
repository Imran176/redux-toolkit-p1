import { all, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { fetchAsyncPosts, fetchAsyncPhotos } from "./postSlice";
// import { fetchAsyncPosts, fetchAsyncPhotos } from "./postSlice";
import {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
  fetchPhotosStart,
  fetchPhotosSuccess,
  fetchPhotosFailure,
} from "./postSlice";

export function* fetchAllPostsAsync() {
  console.log("Fetching Posts using Saga");
  try {
    console.log("Saga try block");

    const result = yield call(fetchAsyncPosts);
    console.log("Api result: ", result);
    // yield put(actions.getUsersSuccess(result.data.data));
    // const response = yield call(fetchAsyncPosts());
    const { data } = result;
    yield console.log("Api response data: ", data);

    yield put(fetchPostsSuccess(data));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
    console.log("saga failure error: ", error.message);
  }
}

export function* fetchAllPostsStart() {
  try {
    yield takeLatest(fetchPostsStart.type, fetchAllPostsAsync);
  } catch (error) {
    console.log("Error in Saga", error);
  }
}

export function* fetchAllPhotosAsync() {
  console.log("Fetching Photos using Saga");
  try {
    console.log("Photos Saga try block");

    const response = yield call(fetchAsyncPhotos);
    console.log("Photos Api result: ", response);
    
    const { data } = response;
    yield console.log("Photos Api response data: ", data);

    yield put(fetchPhotosSuccess(data));
  } catch (error) {
    yield put(fetchPhotosFailure(error.message));
    console.log("Photos saga failure error: ", error.message);
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
