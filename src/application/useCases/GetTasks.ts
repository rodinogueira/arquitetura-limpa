import { TaskRepository } from '../../domain/repositories/TaskRepository';

export class GetTasks {
  constructor(private taskRepository: TaskRepository) {}

  execute = async () => {
    return await this.taskRepository.getTasks();
  };
}
