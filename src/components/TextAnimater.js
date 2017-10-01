import React ,{Component} from 'react';
import './TextAnimater.css';
class TextAnimater extends Component{
  constructor(){
      super();
  }

  render(){
    return(
        <h1 className={this.props.currentElement==this.props.classKey?'animatedText animate':'animatedText exit'}>{this.props.content}</h1>
    );
  }
}
export default TextAnimater;
