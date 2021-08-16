import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from '../components/Header/index';
import { Task, TasksList } from '../components/TasksList/index';
import { TodoInput } from '../components/TodoInput/index';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

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
    setTasks(tasks.filter((item) => item.id !== id));
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181819',
  },
});
