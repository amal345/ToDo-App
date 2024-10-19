import { Component, EventEmitter, inject, Input, Output, output } from '@angular/core';
import { type ITask } from './task.modal';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task!: ITask
  @Output() completedTask: EventEmitter<string> = new EventEmitter()
  private tasksService:TasksService = inject(TasksService)
  onCompleted() {
    return this.tasksService.removeTask(this.task.id);
  }
}

