import React, { useState } from 'react';
import { Alert, Keyboard, View } from 'react-native';
import { Header } from '../../components/Header/index';
import { ITask } from '../../components/TaskItem';
import { TasksList } from '../../components/TasksList/index';
import { TodoInput } from '../../components/TodoInput/index';

import { styles } from './styles';

export interface IEditTaskProps {
  taskId: number;
  taskNewTitle: string;
}

export function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function handleAddTask(taskNewTitle: string) {
    const data = {
      id: new Date().getTime(),
      title: taskNewTitle,
      done: false,
    };

    const repetedWord = tasks.find((task) => {
      return task.title === taskNewTitle;
    });

    if (repetedWord) {
      return Alert.alert(
        'Registered task',
        `The task: ${repetedWord.title} is already registered, so it is impossible to add it again!`
      );
    }

    setTasks((oldState) => [...oldState, data]);
  }

  function handleToggleTaskDone(id: number) {
    const updatedTasks = tasks.map((task) => ({ ...task }));

    const checked = updatedTasks.find((item) => item.id === id);

    if (!checked) {
      return;
    }

    checked.done = !checked.done;

    setTasks(updatedTasks);
  }

  function handleRemoveTask(id: number) {
    Alert.alert('Remove item', 'Are you sure you want to delete this ToDo?', [
      {
        text: 'Sim',
        onPress: () => setTasks(tasks.filter((item) => item.id !== id)),
      },
      {
        text: 'Cancelar',
        onPress: () => Keyboard.dismiss,
      },
    ]);
  }

  function handleEditTask({ taskId, taskNewTitle }: IEditTaskProps) {
    const updatedTasks = tasks.map((task) => ({ ...task }));

    const taskWithNewTitle = updatedTasks.find((task) => task.id === taskId);

    if (!taskWithNewTitle) {
      return;
    }
    taskWithNewTitle.title = taskNewTitle;

    setTasks(updatedTasks);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList
        editTask={handleEditTask}
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  );
}
