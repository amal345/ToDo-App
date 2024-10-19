import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { type IUser } from '../user/user.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) user!: IUser;
  isTaskEnabled: boolean = false;

  constructor(private taskService: TasksService) { }  //||  private taskService = inject(TasksService);
  get selectUserTask() {
    return this.taskService.getUserTasks(this.user.id);
  }

  onNewTask() {
    this.isTaskEnabled = true;
  }

  onCloseAddTask() {
    this.isTaskEnabled = false;
  }

}
