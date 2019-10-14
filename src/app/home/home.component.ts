import { model, TodoItem } from './../../Model/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemcounter : number;
  projecttext : string = "Angular Project";
  projects = [];
  model = new model();

  constructor() { }

  ngOnInit() {
    this.itemcounter = this.model.items.length;
  }

  // return user name
  getName() {
    return this.model.user;
  }

  // return all items
  getTodoItems() {
    return this.model.items;
  }

  additem() {
    if(this.projecttext != "") {
      this.model.items.push(new TodoItem(this.projecttext, false));
      this.itemcounter = this.model.items.length;
    }else {
      alert('Please input your task.');
    }
  }

  removeitem(i) {
    // this.projects.pop();
    this.model.items.splice(i, 1);
    this.itemcounter = this.model.items.length;
  }

}
