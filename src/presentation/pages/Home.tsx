// src/presentation/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import { TaskList } from '../components/TaskList';
import { Task } from '../../domain/entities/Task';

export interface HomeProps {
  loadMakeGetTasks: any; // Definindo como any
}

export const Home: React.FC<HomeProps> = ({ loadMakeGetTasks }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks = await loadMakeGetTasks.execute();
        console.log(tasks, 'TAREFAS');
        setTasks(tasks);
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      }
    };

    fetchTasks();
  }, [loadMakeGetTasks]); // Adicionando loadMakeGetTasks como dependência do useEffect

  const handleToggleDone = async (id: string) => {
    try {
      // Lógica para atualizar o estado da tarefa
    } catch (error) {
      console.error('Failed to toggle task done state:', error);
    }
  };

  return (
    <div className="home-page">
      <h1>Todo List</h1>
      {tasks && <TaskList tasks={tasks} onToggleDone={handleToggleDone} />} {/* Verifica se tasks não é undefined */}
    </div>
  );
};
