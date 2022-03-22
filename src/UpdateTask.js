import React, {useState} from 'react';
import {connect} from "react-redux";

const UpdateTask = (props) => {

    const [taskToUpdate, setTaskToUpdate] = useState('');

    const updateButtonHandler = (taskIdToUpdate, newTask) => {
        props.updateTask(taskIdToUpdate, newTask)
        setTaskToUpdate('')
    }

    return (
        <>
            <button onClick={() => updateButtonHandler(props.task.id, taskToUpdate)}>Update task</button>
            <input placeholder="type new task"
                   value={taskToUpdate}
                   onChange={event => setTaskToUpdate(event.target.value)}/>

        </>
    );
};

const mapDispatchToProps = (dispatch) => ({
    updateTask: (taskIdToUpdate, newTaskToUpdate) => dispatch({
        type: 'UPDATE_TASK',
        payload: {
            taskIdToUpdate: taskIdToUpdate,
            newTaskToUpdate: newTaskToUpdate,
        }
    })
})

export default connect(null, mapDispatchToProps)(UpdateTask);