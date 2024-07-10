import { Task } from '../entities/Task';

export interface TaskRepository {
  getTasks(): Promise<Task[]>;
}
