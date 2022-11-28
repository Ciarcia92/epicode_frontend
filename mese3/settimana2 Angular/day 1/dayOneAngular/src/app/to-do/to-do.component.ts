import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {


  todos: any[] = [];

  constructor() { }

  ngOnInit(): void {
    fetch("https://jsonplaceholder.typicode.com/todos").then((response) => {
      return response.json();
    })
    .then((data) => {

      this.todos = [...data];
  })
}
}
