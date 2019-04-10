import { Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export const selectSubreddit = (subreddit: string) => ({
  type: SELECT_SUBREDDIT,
  subreddit
})

export interface InvalidateSubredditAction {
    type: typeof INVALIDATE_SUBREDDIT,
    subreddit: string
}

export const invalidateSubreddit = (subreddit: string): InvalidateSubredditAction => ({
  type: INVALIDATE_SUBREDDIT,
  subreddit
})

export const requestPosts = (subreddit: string) => ({
  type: REQUEST_POSTS,
  subreddit
})



export interface ReceivedPostsAction {
    type: typeof RECEIVE_POSTS;
    subreddit: string;
    posts: any;
    receivedAt: number;
}

export const receivePosts = (subreddit: string, json:any): ReceivedPostsAction => ({
  type: RECEIVE_POSTS,
  subreddit,
  posts: json.data.children.map(child => child.data),
  receivedAt: Date.now()
})



const fetchPosts = (subreddit: string): ThunkAction<Promise<ReceivedPostsAction>, void, void> => async dispatch => {
    dispatch(requestPosts(subreddit))
    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
    const json = await response.json();
    return dispatch(receivePosts(subreddit, json));
}


const shouldFetchPosts = (state:any, subreddit: string): boolean => {
  const posts = state.postsBySubreddit[subreddit]
  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate
}

export const fetchPostsIfNeeded = (subreddit: string): object => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), subreddit)) {
    return dispatch(fetchPosts(subreddit))
  }
}
