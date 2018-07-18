import React, { Component } from 'react';

export default class Counter extends Component{
    constructor(){
        super();
        this.state={data:0};
      }
      add=()=>{
        console.log("+")
        const data=this.state.data+1;
        this.setState({data})//简写{data:data}
        this.props.updateSumInCounter(1);
      }
      minus=()=>{
        console.log("-") 
        const count=this.state.data-1;
        this.setState({data:count})
        this.props.updateSumInCounter(-1);
      }

      render(){
        return (
        <div>
            <button onClick={this.add}>+</button>
            <button onClick={this.minus}>-</button>
            <span className="show">{this.state.data}</span>
        </div>
        );
      }
}