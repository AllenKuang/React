import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import CounterGroup from './components/CounterGroup'
class App extends Component {
  constructor(props){
    super(props);
    this.state={Num:2}
  }
  change=(event)=>{
    this.setState({Num:event.target.value});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input onChange={this.change.bind(this)}></input>
        <CounterGroup counterNum={this.state.Num}/>
      </div>
    );
  }
}
export default App;
