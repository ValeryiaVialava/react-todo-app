import AddTaskForm from "./AddTaskForm.jsx";
import SearchTaskForm from "./SearchTaskForm.jsx";
import TodoInfo from "./TodoInfo.jsx";
import TodoList from "./TodoList.jsx";

import {useState} from "react";

// теперь tasks это данные которые реакт хранит внутри себя
const Todo = () => {
    const [tasks, setTasks] = useState( [
        {id: 'task-1', title: 'Task 1', isDone: false},
        {id: 'task-2', title: 'Task 2', isDone: true},
    ])

    const [newTaskTitle, setNewTaskTitle] = useState("");

    const deleteAllTasks = () => {
        // проверка точно ли пользователь хочет удалить все Tasks
        const isConfirmed = confirm("Are you sure you want to delete this task?");
        if (isConfirmed) {
            setTasks([])
        }
    }

    const deleteTask = (taskId) => {
        setTasks(
            tasks.filter(task => task.id !== taskId)
        )
        // ВАЖНО! так мы не изменяем старый массив напрямую, мы создаем новый
        // т.к filter возвращает результат, а не мутирует исходный массив
        // это один из главных принципов работы с состояниями в React:
        // не мутировать данные, а создавать новые состояния
    }

    const toggleTaskCompleted = (taskId, isDone) => {
        setTasks(
            // перебираем массив задач с помощью метода массивов map
            tasks.map((task) => {
                // если id совпадает с переданным, то возвращаем новый объект задач,
                // в котором изменяем только поле isDone,
                if (task.id === taskId) {
                    return {...task, isDone}
                }
                // все остальные задачи возвращаем без изменений
                return task
            })
        )
    }

    const filterTasks = (query) => {
        console.log(`Search: ${query}`);
    }

    const addTask = () => {
        // проверка на дурака
        // (при помощи trim обрезаем пробелы в начале и конце и за тем сравниваем длину получившегося значения с 0)
        if (newTaskTitle.trim().length > 0) {
            // newTask — вспомогательная переменная
            const newTask = {
                // сгинерим уникальный идентификатор
                id:crypto?.randomUUID() ?? Date.now().toString(),
                title: newTaskTitle,
                isDone: false,
            }
            // через спред оператор (...) будем разворачивать прежнее состояние tasks и добавляем новую task
            setTasks([...tasks, newTask]);
            // после добавления задачи обновляем NewTaskTitle
            setNewTaskTitle("")
        }
    }

    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm
                addTask={addTask}
                newTaskTitle={newTaskTitle}
                setNewTaskTitle={setNewTaskTitle}
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


