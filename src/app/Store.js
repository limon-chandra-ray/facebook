import { configureStore } from 'redux'

import postsReducer from '../features/posts/PostsSlice'

export default configureStore({
  reducer: {
    posts: postsReducer
  }
})