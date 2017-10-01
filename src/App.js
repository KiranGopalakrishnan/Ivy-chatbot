import React, { Component } from 'react';
import ChatboxContainer from './containers/ChatboxContainer';
import Intro from './containers/Intro';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      currentElement:'intro'
    };
    this.loadNext= this.loadNext.bind(this);
  }
  componentDidMount(){

  }
  loadNext=()=>{
    this.setState({currentElement:'chat'})
  }
  render () {
    return (
      <div className='mainWrapper'>
        <Intro keyClass='intro' currentElement={this.state.currentElement} whenDone={this.loadNext} />
        <ChatboxContainer keyClass='chat' currentElement={this.state.currentElement} />
      </div>
    )
  }
}


export default App;
