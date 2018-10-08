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
      this.tasks[task.id].detail = task.detail;
    }
  }

  onChangeTask(index: number): void {
    this.tasks[index].status = !this.tasks[index].status;
  }

  onToggleTasks(status: boolean): void {
    this.tasks.map((task) => (task.status = status));
  }

  onAddTask(input: HTMLInputElement): void {
    if (input.value) {
      const task: Task = {
        id: this.tasks.length,
        status: false,
        detail: input.value,
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
