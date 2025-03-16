import TodoInput from "./TodoInput"
import {nanoid} from "nanoid";
import {Task} from "./Task";
import {useDispatch, useSelector} from "react-redux";
import {
    addTaskAction,
    checkTaskAction,
    deleteTaskAction
} from "../store/TaskReducer";

export const TodoApp = () =>{
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks);
    const addTask = (text) => {
        const task = {
            text,
            id: nanoid(),
        }
        dispatch(addTaskAction(task));
    }
    const deleteTask = (task) => {
        dispatch(deleteTaskAction(task.id));
    }
    const toggleCheck = (task) => {
        dispatch(checkTaskAction(task.id));
    };
    return (
        <div>
            <TodoInput addTask={addTask}/>
            <div className="tasks">
                {tasks.length > 0 ?
                    <div className="task-list">
                        {tasks.map((item, i) => (
                            <>
                                <Task task={item} key={item.id} number={i + 1}
                                      deleteTask={deleteTask} toggleCheck={toggleCheck}/>
                            </>
                        ))}
                    </div> :
                    <div className="task-list">ЗАДАЧ НЕТ</div>
                }
            </div>

        </div>)
}