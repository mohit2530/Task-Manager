import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid';

function AddTask({ buttonColorPrimary, onAddTask }) {

    const [addTaskText, setAddTaskText] = useState('');
    const [addReminder, setAddReminder] = useState(false);
    const [addTaskDescription, setAddTaskDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!addTaskText || !addTaskDescription) {
            alert(`Tasks cannot be empty`)
            return
        }

        let taskDetails = {
            task_id: uuidv4(),
            task_name: addTaskText,
            task_description: addTaskDescription,
            isReminder: addReminder,
            isComplete: false,
            createdDay: new Date().toISOString(),
        }
        onAddTask(taskDetails)

        setAddTaskText('')
        setAddReminder(false)
        setAddTaskDescription('')
    }

    return (
        <form
            className='add-form'
            onSubmit={handleSubmit}
        >
            <div className='form-control'>
                <label> Task </label>
                <input
                    type='text'
                    value={addTaskText}
                    placeholder='Add Task'
                    onChange={(e) => setAddTaskText(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label> Task Description </label>
                <input
                    type='text'
                    value={addTaskDescription}
                    placeholder='Add Task Description'
                    onChange={(e) => setAddTaskDescription(e.target.value)}
                />
            </div>
            <div className='form-control-check'>
                <label> Reminder </label>
                <input
                    type='checkbox'
                    value={addReminder}
                    checked={addReminder}
                    onChange={(e) => setAddReminder(e.currentTarget.checked)}
                />
            </div>
            <input
                type='submit'
                value='Save Task'
                className='btn btn-block'
                style={{ backgroundColor: buttonColorPrimary }}
            />
        </form >
    )
}

export default AddTask
