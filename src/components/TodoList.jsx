import TodoItem from "./TodoItem.jsx";

const TodoList = (props) => {
    const {
        tasks = [],
    } = props

    const hasTask = true

    if (!hasTask) {
        return <div className="todo__empty-message"></div>
    }

    return (
        <ul className="todo__list">
            {tasks.map(task => (
                <TodoItem
                    className="todo__item"
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    isDone={task.isDone}
                />
            ))}

            {/*/!*or*!/*/}
            {/*{tasks.map(({ id, title, isDone}) => (*/}
            {/*    <TodoItem*/}
            {/*        className="todo__item"*/}
            {/*        id={id}*/}
            {/*        title={title}*/}
            {/*        isDone={isDone}*/}
            {/*    />*/}
            {/*))}*/}

            {/*/!*or*!/*/}
            {/*{tasks.map(task => (*/}
            {/*    <TodoItem*/}
            {/*        className="todo__item"*/}
            {/*        key={task.id}*/}
            {/*        {...task}*/}
            {/*    />*/}
            {/*))}*/}
        </ul>
    )
}

export default TodoList;