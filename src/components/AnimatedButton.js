import React,{Component} from 'react';
import './TextAnimater.css';

class AnimatedButton extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className={this.props.currentElement==this.props.classKey?'goButton animate-button':'goButton animate'} onClick={()=>{this.props.handleClick();}}>
      {this.props.content}
      </div>
    );
  }
}
export default AnimatedButton;
