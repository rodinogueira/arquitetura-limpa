// src/application/useCases/boundaries/GetTasksOutputBoundary.ts
import { TaskDTO } from '../../dtos/TaskDTO';

export interface GetTasksOutputBoundary {
  presentSuccess(tasks: TaskDTO[]): void;
  presentError(error: Error): void;
}
