import { Component,Input, computed, signal, Signal, input,output, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { IUser } from './user.model';
import { CardComponent } from '../shared/card/card.component';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})

export class UserComponent {
  // selectedUser = DUMMY_USERS[randomIndex];  // State Change without Signal
  // selectedUser = signal(DUMMY_USERS[randomIndex])
  // imagePath = computed(() => this.selectedUser().avatar);

  // @Input({ required: true }) id!: string;
  // @Input({required: true}) avatar!: string; //State Change without Signal
  // @Input({ required: true }) name!: string;
  @Input({ required: true }) user!: IUser;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  
  // id = input.required<string>();
  // avatar = input.required<string>(); // signal feature for replace input decorator
  // name = input.required<string>();  // signal feature for replace input decorator
  // imagePath = computed(() => this.avatar());  // signal feature for replace input decorator
  // select = output<string>();
  
  get imagePath() {
    return this.user.avatar;
  }
  onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // // this.selectedUser = DUMMY_USERS[randomIndex]; // State Change without Signal
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    this.select.emit(this.user.id);
  }
}
