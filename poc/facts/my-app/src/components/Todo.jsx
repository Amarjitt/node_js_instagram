import React, { Component } from 'react';
import Listcomponent from './Listcomponent'
import Formtag from "./Formtag";
class Todo extends Component {
    state = {
        tasks: [{ id: 1, name: "Make Tea" },
        { id: 2, name: "Learn Es6" }, {
            id: 3, name: "Learn JSX"
        }]
    }

    handleChange = function(id){
        
        let { tasks } = this.state;
        let remaingTasks = tasks.filter((task => task.id !== id))
        this.setState({ tasks: remaingTasks })
     }
    //  handleInputChange = function(e){
    //     this.setState({text: e.target.value});        
    // }
     handleSubmit = function(newTask){
        this.setState({ tasks : [{id: this.state.tasks.length+1 , name : newTask },...this.state.tasks] });
     }
    render() {
        
        let { tasks } = this.state;
        // this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // console.log(tasks);
        return (<div>
                    <Formtag handleSubmit={this.handleSubmit} ></Formtag>
                    {/* <form onSubmit={this.handleSubmit}>
                      <input type="text" onChange={this.handleInputChange} /><button type="submit" >add task</button>
                    </form> */}
                    <Listcomponent tasks = {tasks} handleListFn={this.handleChange}></Listcomponent>
                    {/* <ul>{ tasks.map(ele => <li key ={ele.id} >{ele.name} <button className="btn btn-danger"
                        onClick={() => { this.handleChange(ele.id) }}>x</button> </li> )}
                    </ul> */}
                </div>);
    }
}
export default Todo;