// src/application/useCases/GetTasks.ts
import { GetTasksInputBoundary } from './boundaries/GetTasksInputBoundary';
import { GetTasksOutputBoundary } from './boundaries/GetTasksOutputBoundary';
import { TaskRepository } from '../../domain/repositories/TaskRepository';
import { TaskDTO } from '../dtos/TaskDTO';

export class GetTasks implements GetTasksInputBoundary {
  constructor(
    private taskRepository: TaskRepository,
    private outputBoundary: GetTasksOutputBoundary
  ) {}

  async execute(): Promise<void> {
    try {
      const tasks: TaskDTO[] = await this.taskRepository.getTasks();
      this.outputBoundary.presentSuccess(tasks);
    } catch (error) {
      if (error instanceof Error) {
        this.outputBoundary.presentError(error);
      } else {
        this.outputBoundary.presentError(new Error('Unknown error occurred'));
      }
    }
  }
}
