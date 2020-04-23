import React, { Component } from 'react';

export default class Addtodo extends Component {
    state={
        newtodo:""
    }
    handlechange=(e)=>{
        this.setState({
            newtodo:e.target.value
        });
     
    }
    handlesubmit=(e)=>{
        e.preventDefault();
        this.props.addtodo(this.state.newtodo);
        this.setState({
            newtodo:""
        });
        
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handlesubmit}>
                    <br></br>
                    <h6>Add new todo</h6>
                    <input type="text" name="newtodo" onChange={this.handlechange} value={this.state.newtodo}></input>
                </form>                
            </div>
        )
    }
}

