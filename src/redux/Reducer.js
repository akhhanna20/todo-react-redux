import {v4 as uuidv4} from "uuid";

const initialState = {
    todo: [
        {id: uuidv4(), taskName: 'Learn redux'},
        {id: uuidv4(), taskName: 'Learn react'},
        {id: uuidv4(), taskName: 'Find job'}
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'DELETE_TASK':
            const newList1 = state.todo.filter(el => el.id !== action.payload.taskId)
            return {...state, todo: newList1};

        case 'ADD_NEW_TASK':
            return {
                ...state, todo: [...state.todo, {id: uuidv4(), taskName: action.payload}]
            };

        case 'UPDATE_TASK':
            const newList2 = state.todo.map(el => el.id === action.payload.taskIdToUpdate ?
                {...el, taskName: action.payload.newTaskToUpdate} : el)
            return {
                ...state, todo: newList2
            }

        default:
            return state;
    }

};

export default reducer;