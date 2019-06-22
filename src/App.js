import React, {Component} from 'react';
import './App.css';


class Slider extends Component{
  state={
    images:[
      'https://i1.wp.com/imagenesparapeques.com/wp-content/uploads/2014/07/anna_elsaheart.png',
      'https://i2.wp.com/imagenesparapeques.com/wp-content/uploads/2014/07/anna_elsa.png',
      'https://i0.wp.com/imagenesparapeques.com/wp-content/uploads/2015/06/Frozen7.jpg?w=600&ssl=1',
      'https://i2.wp.com/imagenesparapeques.com/wp-content/uploads/2015/01/FR3.jpg',
      'https://i0.wp.com/imagenesparapeques.com/wp-content/uploads/2014/11/elsa1-e1415968651404.jpg'

    ],
    idx:0
  }

  handleNext=()=>{
    this.setState({
      idx:this.state.idx +1
    })
  }

  handlePrevious=()=>{
    this.setState({
      idx:this.state.idx -1
    })
  }
  render(){
    return(
      <div>
        <img
          style={{
            width:100,
            height:100
          }}
          src={this.state.images[this.state.idx]}
          alt ="Frozen"
          />
          <button onClick={this.handlePrevious}>Previous</button>
          <button onClick={this.handleNext}>Next</button>
      </div>
    )
  }
}


function App() {
  return (
    <Slider></Slider>
  );
}

export default App;
