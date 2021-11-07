import React, { useState } from 'react';
import { Alert, Keyboard, StyleSheet, View } from 'react-native';
import { Header } from '../components/Header/index';
import { ITask } from '../components/TaskItem';
import { TasksList } from '../components/TasksList/index';
import { TodoInput } from '../components/TodoInput/index';

export interface IEditTaskProps {
  taskNewTitle: string;
  taskId: number;
}

export function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    const repetedWord = tasks.find((task) => {
      return task.title === newTaskTitle;
    });

    if (repetedWord) {
      return Alert.alert(
        'Task já cadastrada',
        `A palavra: ${repetedWord.title},  já existe, com isso não é possível adicioná-la novamente!`
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
    Alert.alert('Remover item', 'Tem certeza que deseja apagar esse ToDo?', [
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181819',
  },
});
