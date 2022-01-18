import React from 'react'
import { FaTimes } from 'react-icons/fa';


function SingleTask({ task, taskStyles, handleDeleteTask }) {
    return (
        <div
            className='task'
            onClick={ () => {handleDeleteTask(task)}}
        >
            <h3>
                {task.task_name}
                <FaTimes style={{
                    color: taskStyles.closePrimaryColor,
                    cursor: taskStyles.closePrimaryCursor
                }}
                />
            </h3>
            <p> {task.task_description}</p>
            <span style={{fontSize: 10}}> {task.createdDay}</span>
        </div>
    )
}

export default SingleTask
