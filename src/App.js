import Header from "./Components/Header/Header";
import React, { useState } from "react";
import MainTask from "./Components/Body/MainTask";
import { APPLICATION_CONTENT_HEADER, APPLICATION_CONTENT_BODY, SINGLE_TASK_STYLES } from "./Constants/ApplicationContent";
import AddTask from "./Components/Body/AddTask";

function App() {

  const [displayTaskList, setDisplayTaskList] = useState(false);
  const [taskList, setTaskList] = useState(APPLICATION_CONTENT_BODY.taskList);

  const onAddTask = (task) => {
    const newTask = [...taskList, task]
    setTaskList(newTask);
  }

  const addTaskFromHeader = () => {
    setDisplayTaskList(!displayTaskList);
  }

  const handleDeleteTask = (e) => {
    const filteredArr = taskList.filter((task) => task.task_id != e.task_id);
    setTaskList(filteredArr);
  };

  return (
    <div className="container">
      <Header
        title={APPLICATION_CONTENT_HEADER.title}
        addTaskFromHeader={addTaskFromHeader}
        headerButtonColor={APPLICATION_CONTENT_HEADER.headerButtonColor}
        headerButtonTextPrimary={APPLICATION_CONTENT_HEADER.headerButtonTextPrimary}
        headerButtonTextSecondary={APPLICATION_CONTENT_HEADER.headerButtonTextSecondary}
      />

      {displayTaskList &&
        <AddTask
          centerText={APPLICATION_CONTENT_HEADER.centerText}
          onAddTask={onAddTask}
          buttonColorPrimary={APPLICATION_CONTENT_HEADER.headerButtonColor}
        />
      }
      <MainTask
        taskList={taskList.filter(Boolean)}
        add_task={APPLICATION_CONTENT_HEADER.add_task}
        onAddTask={onAddTask}
        handleDeleteTask={handleDeleteTask}
        taskStyles={SINGLE_TASK_STYLES} />

    </div>
  );
}

export default App;
