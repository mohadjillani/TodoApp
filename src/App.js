import React, { Component } from 'react';
import Todos from './todos';
import Addtodo from './Addtodo';



export default class App extends Component {
  state={
   todos:[
    {id:1,do:"buying milk"},
    {id:2,do:"buying butter"},
    {id:3,do:"buying food"},
   ]
    
    
};

  delete=(id)=>{
    const todos=this.state.todos.filter(todo=>{
      return todo.id!==id;
    })
    this.setState({todos})
  }
  addtodo=(newtodo)=>{
    const len=this.state.todos.length?this.state.todos.length:1;
    if(this.state.todos.length!==0){
      const id=this.state.todos[len-1].id+1;
      const todos=[...this.state.todos,{id:id, do:newtodo}];
      this.setState({todos}); 
    }else{
      const id=1;
      const todos=[...this.state.todos,{id:id, do:newtodo}];
      this.setState({todos});
    }
    
    
    
  }
  render() {
    return (
      <div className="container">
        <h1 className="center blue-text">Todo's</h1>
        <div className="todosdiv"><Todos todos={this.state.todos} deletetodo={this.delete} /></div>
        <Addtodo addtodo={this.addtodo}/>
      </div>
    )
  }
}

