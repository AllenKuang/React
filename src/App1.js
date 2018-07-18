import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    //this.state={data:0};
    this.state=props;
    // this.add=this.add.bind(this);
    // this.minus=this.minus.bind(this);
  }
  add=()=>{
    console.log("+")
    this.setState(function(state){
      return {data:state.data+1}
    })
  }
  minus=()=>{
    console.log("-") 
    this.setState(function(state){
      return {data:state.data-1}
    })
  }
  render() {
    let data =this.props.data;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="button" id="button1" value="+" onClick={this.add}/>
        <input type="button" id="button2" value="-" onClick={this.minus}/>
        <p className="show">{this.state.data}</p>
      </div>
    );
  }
}
class DataApp extends Component{
  render(){
    let data=0;
    return (
      <App data={data} />
    )
  } 
} 
export default DataApp;
