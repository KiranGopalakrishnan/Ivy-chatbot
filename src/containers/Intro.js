import React,{Component} from 'react';
import './Intro.css';

class Intro extends Component{
  constructor(){
    super();
    this.state={
      show:false
    };
  }
  componentDidMount=()=>{
    this.setState({show:true});
  }
  render(){
    return(
      <div className='introWrapper'>
        <h1 className={this.state.show?'animate':'noAnimate'}>Welcome to IVY</h1>
      </div>
    );
  }
}
export default Intro;
