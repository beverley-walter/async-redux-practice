import request from 'superagent'

export const receivePosts = (posts) => {
  return {
    type: 'RECEIVE_POSTS',
    posts: posts.map(post => post.data)
  }
}

export const setErrorMessage = (message) => {
  return {
    type: 'SET_ERROR_MESSAGE',
    errorMessage: message
  }
}

export function fetchPosts (subreddit) {
  return (dispatch) => {
    if (subreddit === '') return dispatch(setErrorMessage("Type yo thang"))
    request
      .get(`/api/reddit/subreddit/${subreddit}`)
      .end((err, res) => {
        if (err) {
          dispatch(setErrorMessage("ERROR:" + err.message))
          console.error("ERROR:", err.message)
          return
        } else
        {
          (res.body.length == 0) ? dispatch(setErrorMessage("Ain't no thang")) :
          dispatch(receivePosts(res.body))
        }
      })
  }
}
