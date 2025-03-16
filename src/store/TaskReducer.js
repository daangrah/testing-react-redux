const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const CHECK_TASK = 'CHECK_TASK';
const defaultState = {
    tasks: [],
}

export const taskReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {...state, tasks: [...state.tasks, action.payload]};
        case DELETE_TASK:
            return {...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
        case CHECK_TASK:
            return {...state, tasks: state.tasks.map((task) =>
                    task.id === action.payload ? { ...task, checked: !task.checked } : task)}

        default: return state;
    }
}

export const addTaskAction = (payload) => {return {type: ADD_TASK, payload}};
export const deleteTaskAction = (payload) => {return {type: DELETE_TASK, payload}};
export const checkTaskAction = (payload) => {return {type: CHECK_TASK, payload}};