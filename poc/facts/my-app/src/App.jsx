import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Todo from './components/Todo';
// import Listcomponent from './components/Listcomponent'
class App extends Component {
    
    render() {
        // let { tasks } = this.state;
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // console.log(tasks);
        return (<div>
                    {/* <Formtag sunbmitFunction={this.handleSubmit} handleInput={this.handleInputChange}></Formtag> */}
                    {/* <form onSubmit={this.handleSubmit}>
                      <input type="text" onChange={this.handleInputChange} /><button type="submit" >add task</button>
                    </form> */}
                    {/* <Listcomponent tasks = {tasks} handleListFn={() => this.handleChange}></Listcomponent> */}
                    {/* <ul>{ tasks.map(ele => <li key ={ele.id} >{ele.name} <button className="btn btn-danger"
                        onClick={() => { this.handleChange(ele.id) }}>x</button> </li> )}
                    </ul> */}
                    <Todo/>
                </div>);
    }
}
export default App;
