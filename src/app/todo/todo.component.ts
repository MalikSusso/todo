import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  today: any ;
  todos:any;

  constructor(private toDoService : TodoService,
              private router : Router) { }

  ngOnInit(): void {
    this.today = this.toDoService.today ;
    this.todos = this.toDoService.todos;
  }

  onChangeIsModif(i:number) {
    this.toDoService.onChangeIsModif(i) ;
  }

  onChangeStatus (i:number) {
    this.toDoService.onChangeStatus(i) ;
  }

  onView(id : number) {
    this.router.navigate(["single-todo",id])
  }

}
