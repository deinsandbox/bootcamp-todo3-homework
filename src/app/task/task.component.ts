import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Status } from './status.enum';
import { Task } from './task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input()
  tasks: Task[];
  @Input()
  filter: Status;
  @Output()
  removeTask = new EventEmitter<Task>();
  @Output()
  editTask = new EventEmitter<Task>();
  @Output()
  disabledTask = new EventEmitter<number>();
  @Output()
  changeTask = new EventEmitter<number>();

  statusEnum: typeof Status = Status;

  constructor() {}

  ngOnInit() {}

  onRemoveTask(task: Task) {
    this.removeTask.emit(task);
  }

  onEditTask(task: Task) {
    this.editTask.emit(task);
  }

  onDisabledTask(index: number) {
    this.disabledTask.emit(index);
  }

  onChangeTask(index: number) {
    this.changeTask.emit(index);
  }
}
