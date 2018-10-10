import { Component } from '@angular/core';
import { Status } from './task/status.enum';
import { Task } from './task/task.interface';
import { TASKS } from './task/task.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todos';

  tasks: Task[];
  filter: Status;

  statusEnum: typeof Status = Status;

  constructor() {
    this.tasks = TASKS;
    this.filter = Status.All;
  }

  onRemoveTask({ id }): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onEditTask(task: Task): void {
    if (task.detail === '') {
      this.onRemoveTask(task);
    } else {
      const element = this.tasks[task.id];
      element.detail = task.detail;
      element.isDisabled = true;
    }
  }

  onChangeTask(index: number): void {
    const element = this.tasks[index];
    element.isCompleted = !element.isCompleted;
    element.isDisabled = true;
  }

  onToggleTasks(status: boolean): void {
    this.tasks.forEach((task) => {
      task.isCompleted = status;
    });
  }

  onDisabledTask(index: number): void {
    this.onDisableAllTasks();
    this.tasks[index].isDisabled = false;
  }

  onDisableAllTasks(): void {
    this.tasks.forEach((task) => {
      task.isDisabled = true;
    });
  }

  onAddTask(input: HTMLInputElement): void {
    if (input.value) {
      const task: Task = {
        id: new Date().valueOf(),
        isCompleted: false,
        detail: input.value,
        isDisabled: true,
      };
      this.tasks.push(task);
      input.value = '';
    }
  }

  onFilter(status: Status): void {
    this.filter = status;
  }

  onClearCompleted(): void {
    this.tasks = this.tasks.filter((task) => task.isCompleted === false);
    this.onFilter(this.filter);
    if (this.tasks.length <= 0) {
      this.filter = Status.All;
    }
  }
}
