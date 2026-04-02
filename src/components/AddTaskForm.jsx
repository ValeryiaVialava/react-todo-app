import Field from "./Field.jsx";
import Button from "./Button.jsx";

const AddTaskForm = (props) => {
    const {
        addTask,
        newTaskTitle,
        setNewTaskTitle,
    } = props

    // при отправке формы браузер перезагружает стр.,
    // поэтому мы должны отменить дефолтные настройки браузера для этого случая:
    const onSubmit = (event) => {
        event.preventDefault()
        addTask()
    }

    return (
        <form
            className="todo__form"
            onSubmit={onSubmit}>
            <Field
                className="todo__field"
                label="New tast title"
                id="new-task"
                value={newTaskTitle}
                onInput={(event) => setNewTaskTitle(event.target.value)}
            />
            <Button type="submit">Add</Button>
        </form>
    )
}

export default AddTaskForm

