import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatboxContainer from './containers/ChatboxContainer'


class App extends Component {
  constructor(){
    super();
  }
  componentDidMount(){
    
  }
  render () {
    return (
      <div className='App'>
        <ChatboxContainer />
      </div>
    )
  }
}


export default App;
