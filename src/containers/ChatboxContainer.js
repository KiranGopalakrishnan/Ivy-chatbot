import React, { Component } from 'react';
import ChatBubble from '../components/ChatBubble';
import MessageBox from '../components/MessageBox';
import './ChatboxContainer.css';

var rows=[];
class ChatboxContainer extends Component {
  constructor(){
    super();
    this.state={
      newMessage:''
    }
    this.sendMessage = this.sendMessage.bind(this);
    this.setNewMessage = this.setNewMessage.bind(this);
    this.addResponse= this.addResponse.bind(this);
  }
  componentWillMount(){

  }
  sendMessage(textMessage){
    this.setNewMessage(textMessage,true);
    var selfe = this;
    var xhttp = new XMLHttpRequest();
    var params = "userMessage="+textMessage;
    xhttp.onreadystatechange = function(){
      if(this.readyState==4&&this.status==200){
        var response = JSON.parse(this.responseText);
        var aiTextResponse = response.result.fulfillment.speech;
        selfe.setNewMessage(aiTextResponse,false);
      }
    };
    xhttp.open("POST","/send",true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(params);
    //rows.push(<ChatBubble isUser={false}/>);
  }

  addResponse=(responseBy)=>{
    rows.push(<ChatBubble content={this.state.newMessage} isUser={responseBy}/>);
  }
  setNewMessage=(newMessageText,isUser)=>{
    this.setState({newMessage:newMessageText},()=>{this.addResponse(isUser);});
  }
  render() {
    return (
      <div className='chatbox_container'>
      <div className="chatbox_wrapper">
      {rows}
      </div>
      <div className='messageBox_wrapper'>
      <MessageBox onSubmit={this.sendMessage} />
      </div>
      </div>
    );
  }
}

export default ChatboxContainer;
