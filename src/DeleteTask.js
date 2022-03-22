import React from 'react';
import {connect} from "react-redux";

const DeleteTask = (props) => {

    return (
        <>
            <button onClick={() => props.deleteTask(props.task.id)}>Delete</button>
        </>
    );
};

const mapDispatchToProps = (dispatch) => ({
    deleteTask: (taskId) => dispatch({
        type: 'DELETE_TASK',
        payload: {taskId: taskId}
    })

})

export default connect(null, mapDispatchToProps)(DeleteTask);