import React,{Component} from 'react';
import './Intro.css';

class Intro extends Component{
  constructor(){
    super();
    this.state={
      show:true
    };
  }
  componentDidMount=()=>{
    setInterval(()=>{
      var st = this.state.show?false:true;
      this.setState({show:st});
    },5000)
  }
  render(){
    return(
      <div className='introWrapper'>
        <h1 className={this.state.show?'animatedText animate':'animatedText exit'}>Hello...</h1>
      </div>
    );
  }
}
export default Intro;
