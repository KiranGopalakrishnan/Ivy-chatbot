import React,{Component} from 'react';
import TextAnimater from '../components/TextAnimater';
import AnimatedButton from '../components/AnimatedButton';
import './Intro.css';
var rows=[];
class Intro extends Component{
  constructor(){
    super();
    this.state={
      currentElement:''
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  componentDidMount=()=>{
    rows.push('one','two','three','four');
    var i=0;
    var timer = setInterval(()=>{
      this.setState({currentElement:rows[i]});

      console.log("now done");
      i++;
      if(i>rows.length){
        clearInterval(timer);
      }
    },2000)
  }
  handleButtonClick=()=>{
    this.props.whenDone();
  }
  render(){
    return(
      <div className={this.props.currentElement==this.props.keyClass?'introWrapper show-intro':'introWrapper'}>
        <TextAnimater classKey="one"  currentElement={this.state.currentElement} content="Hello There!" />
          <TextAnimater classKey="two" currentElement={this.state.currentElement} content="I'm IVY" />
            <TextAnimater classKey="three" currentElement={this.state.currentElement}  content="A Conversational Chatbot" />
            <TextAnimater classKey="four" currentElement={this.state.currentElement}  content="Lets go .... " />
            <AnimatedButton handleClick={this.handleButtonClick} currentElement={this.state.currentElement} content="Chat with Ivy" />
      </div>
    );
  }
}
export default Intro;
