import React, { Component } from 'react';

import Counter from './Counter'

export default class CounterGroup extends Component{
    constructor(){
        super();
        this.state={sum:0}
    }
    // updateSum=sum=>{
    //     this.state.sum+=sum;
    // }
    updateSum=sum=>{
        this.setState({sum:this.state.sum+=sum});
    }
    render(){
        let counterNum=this.props.counterNum;
        // generateCounter=(number)=>{
        //     for(let i=0;i<number;i++){
        //         React.createElement(<Counter/>,"")
        //     };
        // }
        var counterGroup=[];
        for(let i=0;i<counterNum;i++){
            counterGroup.push(<Counter updateSumInCounter={(e)=>this.updateSum(e)} />);
        };
        return(
            <div >
                {counterGroup}
                <p>总数{this.state.sum}</p>
            </div>
        );
    }
}