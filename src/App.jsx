const App = () => {
    const tasks = [
        'Task 1',
        'Task 2',
        'Task 3',
    ]
    return (
        <>
            <ul>
                {/*task это сущность, в которую попадает каждый элемент массива tasks,
                 и на основе этих данных создадим элемент li для каждого элемента списка*/}
                {tasks.map(task => <li key={task}>{task}</li>)}
            </ul>
        </>
    )
}
export default App



