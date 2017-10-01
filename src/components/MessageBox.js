import React,{Component} from 'react';
import './MessageBox.css';
class MessageBox extends Component{
  constructor(){
    super();
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleKeyPress=(event)=>{
    if(event.key==='Enter'||(event.keyCode == 10 || event.keyCode == 13)){
      event.preventDefault();
      var message = this.refs.textInput.value;
      this.props.onSubmit(message);
      this.refs.textInput.value = '';
    }
  }
  render(){
    return (
      <div className='messageBox'>
        <textarea className='textInput' ref='textInput' placeholder='Enter message' onKeyDown={this.handleKeyPress}></textarea>
      </div>
    );
  }
}
export default MessageBox;
