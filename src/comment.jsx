import React, { Component } from 'react';

class Comment extends Component {

  render() {
    const {username,content} = this.props.comment;
    return (
      <div className="comment-list">
        <ul>
            <li><span className="username">{username}:</span><span>{content}</span></li>
        </ul>
      </div>
    )
  }
}

export default Comment;
