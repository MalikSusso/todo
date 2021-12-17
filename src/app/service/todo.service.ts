import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  today = new Date ;

todos = [
  {
    toDoName : "Project one",
    status : true ,
    image : "http://placehold.it/150",
    isModif :true
  },
  {
    toDoName : "Project two",
    status : false ,
    image : "http://placehold.it/150",
    isModif :false

  },
  {
    toDoName : "Project three",
    status : true ,
    image : "http://placehold.it/150",
    isModif :false

  },
  {
    toDoName : "Project for",
    status : true ,
    image : "http://placehold.it/150",
    isModif :false

  },

];

onChangeStatus (i:number) {
  this.todos[i].status = !this.todos[i].status ;
}

onChangeIsModif(i:number) {
  this.todos[i].isModif = !this.todos[i].isModif ;
}

getTodo(i:number) {
  if (this.todos[i]) {
    return this.todos[i];
  }
  else return false;
}


  constructor() { }
}
