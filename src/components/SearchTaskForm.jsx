import Field from "./Field.jsx";

const SearchTaskForm = (props)=> {
    const {
        onSearchInput,
    } = props
    return (
        <form
            className="todo__form"
            //чтобы поиск выполнялся налету
            onSubmit={(event) => event.preventDefault()}
        >
            <Field
                className="todo__field"
                label="Search task"
                id="search-task"
                type="search"
                // обработчик события получает объект события (чаще всего его называют event)
                onInput={(event) => onSearchInput(event.target.value)}
            />
        </form>
    )
}

export default SearchTaskForm


