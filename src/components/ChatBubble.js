import React, { Component } from 'react';
import './ChatBubble.css';

class ChatBubble extends Component {
  render() {
    return (
      <div className={this.props.isUser?"chatBubble user":"chatBubble system"}>
        <span className="chatText">{this.props.content}</span>
      </div>
    );
  }
}

export default ChatBubble;
