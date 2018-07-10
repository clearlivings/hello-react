import React, { Component } from 'react';
import 'antd/dist/antd.css'; 
import './CommentApp.css';
import ComponentInput from './CommentInput.jsx';
import ComponentList from './CommentList';
class CommentApp extends Component {
  constructor() {
    super();
    this.state = {comments: []}
  }
  handleSubmitComment(comment) {
    if(!comment) return
    if(!comment.username) return alert('请输入用户名')
    if(!comment.content) return alert('请输入评论内容')
    this.state.comments.push(comment)
    this.setState({
      comments: this.state.comments
    })
  }
  render() {
    return (
      <div className="comment-content">
        <ComponentInput onSubmit={this.handleSubmitComment.bind(this)}/>
        <ComponentList comments={this.state.comments}/>  
      </div>
    )
  }
}

export default CommentApp;
