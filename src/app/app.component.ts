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
      element.disabled = true;
    }
  }

  onChangeTask(index: number): void {
    const element = this.tasks[index];
    element.status = !element.status;
    element.disabled = true;
  }

  onToggleTasks(status: boolean): void {
    this.tasks.map((task) => (task.status = status));
  }

  onDisabledTask(index: number): void {
    this.tasks.map((task) => (task.disabled = true));
    this.tasks[index].disabled = false;
  }

  onAddTask(input: HTMLInputElement): void {
    if (input.value) {
      const task: Task = {
        id: this.tasks.length,
        status: false,
        detail: input.value,
        disabled: true,
      };
      this.tasks.push(task);
      input.value = '';
    }
  }

  onFilter(status: Status): void {
    this.filter = status;
  }

  onClearCompleted(): void {
    this.tasks = this.tasks.filter((task) => task.status === false);
    this.onFilter(this.filter);
    if (this.tasks.length <= 0) {
      this.filter = Status.All;
    }
  }
}
