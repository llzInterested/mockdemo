import React, { Component } from 'react';
import api from './api'
import './mock/mock'

class App extends Component {
  constructor(){
    super()
    this.state = {
      imgSrc : ''  
    }
  }
  handleClick = () => {
    let {imgSrc} = this.state

    api.get('/test').then(result => {
      console.log(result.data)
      if(imgSrc === result.data.imgs){
        console.log("一样")
      }
      this.setState({imgSrc:result.data.imgs})
    })
  }

  render() {
    const {imgSrc} = this.state
    return (
      <div>
        <button onClick={this.handleClick}>发起ajax请求</button>
        <img src={imgSrc} alt=""/>
      </div>
    );
  }
}

export default App;
