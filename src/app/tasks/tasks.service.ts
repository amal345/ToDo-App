import { Injectable } from '@angular/core';
import { INewTaskData, ITask } from './task/task.modal';
import { dummyTasks } from '../dummy-tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  
  private tasks: ITask[] = dummyTasks;
  constructor() {
    const tasks = localStorage.getItem('tasks');
    if(tasks) {
      this.tasks = JSON.parse(tasks);
    }
   }
  

  getUserTasks(userId: string): ITask[] { 
    return this.tasks.filter((tasks) => tasks.userId === userId)
  }

  addNewTask(newTask: INewTaskData, userId: string) {
    this.tasks.unshift({
      ...newTask,
      userId: userId,
      id: Math.random().toString()
    })
    this.saveTasks();
  }

  removeTask(id: string) { 
    this.tasks = this.tasks.filter(task => task.id !== id)
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
