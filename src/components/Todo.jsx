import AddTaskForm from "./AddTaskForm.jsx";
import SearchTaskForm from "./SearchTaskForm.jsx";
import TodoInfo from "./TodoInfo.jsx";
import TodoList from "./TodoList.jsx";

const Todo = () => {
    const tasks = [
        {id: 'task-1', title: 'Task 1', isDone: false},
        {id: 'task-2', title: 'Task 2', isDone: true},
    ]

    const deleteAllTasks = () => {
        console.log('Delete all tasks');
    }

    const deleteTask = (taskId) => {
        console.log(`Delete task: ${taskId}`);
    }

    const toggleTaskCompleted = (taskId, isDone) => {
        console.log(`Task is ${taskId} ${isDone ? 'done' : 'unDone'}`);
    }

    const filterTasks = (query) => {
        console.log(`Search: ${query}`);
    }

    const addTask = () => {
        console.log(`Task is added`);
    }

    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm
                addTask={addTask}
            />
            <SearchTaskForm
                onSearchInput={filterTasks}
            />
            <TodoInfo
                total={tasks.length}
                done={tasks.filter(({ isDone }) => isDone).length}
                onDeleteAllButtonClick={deleteAllTasks}
            />
            <TodoList
                tasks={tasks}
                onDeleteTaskButtonClick={deleteTask}
                onTaskCompleteChange={toggleTaskCompleted}
            />
        </div>
    )
}

export default Todo;


