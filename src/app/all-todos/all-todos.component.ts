import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../todo';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.css']
})
export class AllTodosComponent implements OnInit {

 
  
  
  todos:Array<Todo> = [{task:"Create All Todos Task",completed:false},{task:"Create Show Todo Card Task",completed:true},{task:"Display Todo Card",completed:false},{task:"Add Contact Card",completed:true}]
  newTodo:Todo = this.resetTodo();
  allTodosComplete = this.todos?.filter(x=> x.completed === false)?.length>0?false:true;
  obsTodos$:Observable<Todo[]> = of(this.todos);
   /**
    *
    */
   constructor() {
    this.obsTodos$.subscribe(res=> {
      this.allTodosComplete = res?.filter(x=> x.completed === false)?.length===0?true:false;
  } )
    
   }

  ngOnInit(): void {
    
    
  }
  addNewTodo():void{
    this.todos.push(...[this.newTodo]);
    
    this.newTodo = this.resetTodo();
  }
  resetTodo():Todo{

    return  {task:"",completed:false};
    
  }

}


