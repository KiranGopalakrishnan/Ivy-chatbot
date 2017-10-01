import React, { Component } from 'react';
import ChatboxContainer from './containers/ChatboxContainer';
import Intro from './containers/Intro';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      current:'intro'
    };
  }
  componentDidMount(){

  }
  render () {
    return (
      <div className='mainWrapper'>
      <div className='intro'>
        <Intro current={this.state.current} />
      </div>
      <div className='App'>
        <ChatboxContainer current={this.state.current} />
      </div>
      </div>
    )
  }
}


export default App;
