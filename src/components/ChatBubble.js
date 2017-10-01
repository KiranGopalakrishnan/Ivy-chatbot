import React, { Component } from 'react';
import './ChatBubble.css';

class ChatBubble extends Component {
  render() {
    return (
      <div className="single_chat_wrapper">
      <div className={this.props.isUser?"chatBubble user":"chatBubble system"}>
        {this.props.content}
      </div>
      <div className={this.props.isUser?"user-icon":"system-icon avatar"}>{this.props.isUser?"":"Ivy"}</div>
      </div>
    );
  }
}

export default ChatBubble;
