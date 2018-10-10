import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task/task.interface';

@Pipe({
  name: 'count',
  pure: false,
})
export class CountPipe implements PipeTransform {
  transform(tasks: Task[], status: boolean = false): number {
    return tasks.filter((task) => task.isCompleted === status).length;
  }
}
