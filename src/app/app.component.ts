import { Component, OnInit } from '@angular/core';
import { PersonService } from './person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project Tasks By Heng Loem';
  persons = [];

  constructor (private _personservice : PersonService) {}

  ngOnInit() {
    this._personservice.getData().subscribe (data => this.persons = data);
  }
}
