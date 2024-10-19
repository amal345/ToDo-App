import { Component, EventEmitter, inject, Input, Output, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INewTaskData } from '../task/task.modal';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input() userId!: string;
  @Output() close = new EventEmitter<void>();
  // enteredTitle: Signal<string> = signal('');
  // enteredSummary: Signal<string> = signal('');
  // enteredDueDate: Signal<string> = signal('');
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDueDate: string = '';
private tasksService = inject(TasksService);
  // constructor(private tasksService: TasksService) { }

  onCloseTask() {
    this.close.emit();
  }

  onSubmit() {
    if (!this.enteredTitle || !this.enteredSummary || !this.enteredDueDate) {
      return;
    }
    this.tasksService.addNewTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    }, this.userId);

    this.onCloseTask();
  }

}
