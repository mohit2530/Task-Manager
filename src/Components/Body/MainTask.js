import React from 'react'
import SingleTask from './SingleTask';

const Tasks = ({ taskList, taskStyles, add_task, handleDeleteTask }) => {
    return (
        <>
            {
                !Boolean(taskList.length) &&
                <p style={{ textAlign: taskStyles.textAlign }}> {add_task} </p>
            }

            {taskList.map((task) => {
                return <SingleTask key={task.task_id}
                    handleDeleteTask={handleDeleteTask}
                    task={task}
                    taskStyles={taskStyles} />
            })
            }
        </>
    )
}

export default Tasks;