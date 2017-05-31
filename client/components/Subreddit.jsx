import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import Post from './Post'

const Subreddit = ({subreddits, errorMessage}) => (
  <div>
    <h1 className="errorMessage">{errorMessage}</h1>
    {subreddits.map((props, i) =>
      <div>
      <Post
        key={i}
        title={props.title}
        author={props.author}
        permalink={props.permalink}
        />
      </div>
    )}
  </div>
)

Subreddit.propTypes = {
  subreddits: PropTypes.array.isRequired
}

function giveErrorToProps(state) {
  return {
    errorMessage: state.errorMessage
  }
}

export default connect(giveErrorToProps)(Subreddit)
