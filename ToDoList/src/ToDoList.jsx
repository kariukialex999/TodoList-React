import { useState } from 'react'

function ToDoList() {
    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Walk the Dog"]);
    const [newtask, setNewTask] = useState("");

    function HandleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        setNewTask(newtask)
    }

    function deleteTask(index) {

    }
    
    function moveTaskUp(index) {

    }

    function moveTaskDown(index) {

    }

    return(
    <div className='to-do-list'>

        <h1>To-Do-List</h1>

        <div>
            <input 
                type='text'
                placeholder='Add New Task...'
                value={newtask}
                onChange={HandleInputChange}
                />
            <button
                className='add-button'
                onClick={addTask}>
                Add
            </button>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='delete-button'
                                onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button className='move-button'
                                onClick={() => moveTaskUp(index)}>
                            👆
                        </button>
                        <button className='move-button'
                                onClick={() => moveTaskDown(index)}>
                            👇
                        </button>
                    </li>
                )}
            </ol>
            
        </div>

    </div>)
}

export default ToDoList