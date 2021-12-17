import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.css']
})
export class SingleTodoComponent implements OnInit {

  todos : any ;
  error : any ;

  constructor(private toDoService : TodoService,
              private route : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'] ;
    this.todos = this.toDoService.getTodo(+id) ;
    if (!this.todos) {
      this.error =" This ID does not exist"
    }
  }

}
