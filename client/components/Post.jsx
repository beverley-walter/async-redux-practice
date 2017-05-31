import React, {PropTypes} from 'react'

const Post = ({title, author, permalink}) => (
  <div>
    <h1>{title}</h1>
    <h3>{author}</h3>
    <h3><a className = "cursor" href={`http://reddit.com/${permalink}`}>Click Here!</a></h3>
  </div>
)

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  permalink: PropTypes.string.isRequired
}

export default Post
