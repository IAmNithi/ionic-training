import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  todoInput: string;
  listArray: any = [];
  constructor() { }

  ngOnInit() {
  }

  addTodo(){
    console.log(this.todoInput);
    this.listArray.push(this.todoInput);
    this.todoInput = '';
  }

}
