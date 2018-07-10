import React, { Component } from 'react';
import './CommentApp.css';
class ComponentInput extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            content: ''
        }
    }
    handleUserNameChange(e) {
        this.setState({
            username: e.target.value
        });
    }
    handleUserTextarea(e) {
        this.setState({
            content: e.target.value
        });
    }
    handleSubmit() {
        if(this.props.onSubmit) {
            const { username,content } = this.state
            this.props.onSubmit({username,content})
        }
        this.setState({content: ''})
    }
    render() {
        return (
            <div className="user-input-area">
                <div className="input-field">
                    <span>用户名:</span>
                    <input type="text" value={this.state.username} onChange={this.handleUserNameChange.bind(this)}/>
                </div>
                <div className="textarea-field">
                    <span>评论内容:</span>
                    <textarea value={this.state.content} onChange={this.handleUserTextarea.bind(this)}></textarea>
                </div>
                <div className="btn-submit">
                    <button onClick={this.handleSubmit.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}

export default ComponentInput;
