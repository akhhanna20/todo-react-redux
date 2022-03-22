import React, {useState} from 'react';
import {connect} from "react-redux";

const AddNewTask = (props) => {

    const [newTask, setNewTask] = useState('');

    const inputButtonHandler = () => {
        props.addNewTask('ADD_NEW_TASK', newTask )
        setNewTask('')
    }

    return (
        <div>
            <input value={newTask} placeholder={newTask} onChange={(event)=>
            setNewTask(event.target.value)}/>
            <button onClick={inputButtonHandler}>Add task</button>

        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
  addNewTask: (type, newTask) => dispatch({
      type,
      payload: newTask})
})

export default connect(null, mapDispatchToProps) (AddNewTask);