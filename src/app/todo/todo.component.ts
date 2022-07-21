import { Component, Input, Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../todo';

@Component({
  selector: '[app-todo]',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  {
  @Input() todo: Todo = { task: "", completed: false }
  
  
  constructor() { }

  ngOnInit(): void {
  }

  completeTask(): void {
    this.todo.completed = true
  }
 
resetTodo():Todo{

  return  {task:"",completed:false};
}

}
