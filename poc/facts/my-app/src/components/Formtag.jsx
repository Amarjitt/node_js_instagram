import React, { Component } from 'react';
class Formtag extends Component {
    state = {text : ""}
    handleInputChange = function(e){
        e.preventDefault();
        this.setState({text: e.target.value});  
        console.log(this.state.text);      
    }
    runrenderagain = function(){
        this.setState({text:""});
    }
    submitAction = function(){
        if(this.state.text === ''){
            return;
        }
        this.setState({text:""});
        this.props.handleSubmit(this.state.text);
        this.runrenderagain();
        // console.log('after-------->'+this.state.text)
        
    }
    render() { 
        this.submitAction = this.submitAction.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        return (<React.Fragment>
            {/* onSubmit={e.preventDefault(); this.props.submitFunction(this.state.text)} */}
            {/* <form onSubmit={e.preventDefault() this.submitAction}> */}
            <form onSubmit={(e) => {
                e.preventDefault()
                this.submitAction();
            }}>
                <input type="text" onChange={this.handleInputChange} /><button type="submit" >add task</button>
            </form>
        </React.Fragment>);
    }
}

export default Formtag;