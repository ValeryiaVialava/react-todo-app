import Field from "./Field.jsx";

const SearchTaskForm = (props)=> {
    const {
        onSearchInput,
    } = props
    return (
        <form
            className="todo__form"
            onSubmit={(event) => event.preventDefault()} //чтобы поиск выполнялся налету
        >
            <Field
                className="todo__field"
                label="Search task"
                id="search-task"
                type="search"
                onInput={(event) => onSearchInput(event.target.value)} // обработчик события получает объект события (чаще всего его называют event)
            />
        </form>
    )
}

export default SearchTaskForm

