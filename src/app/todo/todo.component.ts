import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

todos = [
  {
    toDoName : "Project one",
    status : true ,
    image : "http://placehold.it/150"
  },
  {
    toDoName : "Project two",
    status : false ,
    image : "http://placehold.it/150"
  },
  {
    toDoName : "Project three",
    status : true ,
    image : "http://placehold.it/150"
  },
  {
    toDoName : "Project for",
    status : true ,
    image : "http://placehold.it/150"
  },

];

onChangeStatus (i:number) {
  this.todos[i].status = !this.todos[i].status ;
}

  constructor() { }

  ngOnInit(): void {
  }

}
