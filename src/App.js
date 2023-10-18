import React from "react";

class AddTask extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      todos: [],
      newTask: '',
    }
  }
  handleAddTask = () =>{
    const {newTask, todos} = this.state
    if(newTask.trim() !== ''){
      this.setState({
        todos: [...todos, { text: newTask.trim(), checked: false }],
        newTask: "",
      });
    }
  }
  handleInputChange =(e)=>{
    this.setState({newTask: e.target.value})
  }
  render(){
    const {todos, newTask} = this.state;
    return(
      <div className="container">
        <input className="input" type="text" value={newTask} placeholder="Add Task" onChange={this.handleInputChange}></input>
        <button className="addBtn" onClick={this.handleAddTask}>Add</button>
        <div className="list">
          <ul>
            {todos.map((todo, index)=>(
              <li key={index}>
                {todo.text}
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    )
  }
}
export default AddTask;