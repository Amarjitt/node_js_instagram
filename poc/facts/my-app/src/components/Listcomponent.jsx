import React from 'react';
const Listcomponent = (props) => {
    let {tasks , handleListFn } = props;
    return ( <React.Fragment>
        <ul>{ tasks.map(ele => <li key ={ele.id} >{ele.name} <button className="btn btn-danger"
                        onClick={() => { handleListFn(ele.id) }}>x</button> </li> )}
                    </ul>
    </React.Fragment> );
}
 
export default Listcomponent;