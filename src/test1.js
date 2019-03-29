import React,{ Component } from 'react';
import { Checkbox } from 'antd';

class Test1 extends Component{
    constructor(props){
         super(props)  
           this.state={
               num:1
           }                 
    }
    render() {
       
        return (
            <div>
                <Checkbox onChange={this.onChange}>Checkbox</Checkbox>,
  mountNode  {this.state.num}
                <h1>test1</h1>
                </div>
        )
    }
    onChange =(e)=>{
        this.setState((state)=>{
            return {num:state.num+1};
        })
        console.log(`checked = ${e.target.checked}`);
    }
}

export default Test1;