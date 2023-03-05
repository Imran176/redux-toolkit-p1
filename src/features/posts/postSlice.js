import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  posts: [],
  photos: [],
  error: "",
};

// export const fetchAsyncPhotos = createAsyncThunk("users/fetchUsersd", () => {
//   return axios
//     .get("https://jsonplaceholder.typicode.com/photos")
//     .then((response) => response.data.map((photo) => photo.thumbnailUrl))
//     .catch((error) => error.message);
// });

export const fetchAsyncPosts = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

export const fetchAsyncPhotos = () => {
  return axios.get("https://jsonplaceholder.typicode.com/photos/?_limit=10");
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPostsStart: (state) => {
      state.loading = true;
      state.error = "";
    },
    fetchPostsSuccess: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.photos = [];
      state.error = "";
    },
    fetchPostsFailure: (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.payload;
    },

    fetchPhotosStart: (state) => {
      state.loading = true;
      state.error = "";
    },
    fetchPhotosSuccess: (state, action) => {
      state.loading = false;
      state.photos = action.payload;
      state.posts = [];
      state.error = "";
    },
    fetchPhotosFailure: (state, action) => {
      state.loading = false;
      state.photos = [];
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;
export const {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,

  fetchPhotosStart,
  fetchPhotosSuccess,
  fetchPhotosFailure,
} = postSlice.actions;
