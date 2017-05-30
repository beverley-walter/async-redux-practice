import React, {PropTypes} from 'react'

import Post from './Post'

const Subreddit = ({subreddits}) => (
  <div>
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

export default Subreddit
