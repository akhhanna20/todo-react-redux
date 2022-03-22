import './App.css';
import {connect} from "react-redux";
import AddNewTask from "./AddNewTask";
import DeleteTask from "./DeleteTask";
import UpdateTask from "./UpdateTask";

function App(props) {

    return (
        <div>
            {props.todo.map(el => <li>{el.taskName} <DeleteTask task={el}/> <UpdateTask task={el}/></li>)}
            <br/>
            <AddNewTask/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    todo: state.todo,
})


export default connect(mapStateToProps, null)(App);
