import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  
  constructor(private _personservice : PersonService) { }

  ngOnInit() {
    this._personservice.getData().subscribe (data => this.persons = data);
  }
  
  persons = [];
  // persons : any[] = [
  //   { id:'1', name: "Granger", gender: "M", age: 24, role: "Maskman" },
  //   { id:'2', name: "Gord", gender: "M", age: 20, role: "Mage" },
  //   { id:'3', name: "Chou", gender: "M", age: 23, role: "Figter" },
  //   { id:'4', name: "Alucard", gender: "M", age: 30, role: "Assasin" },
  //   { id:'5', name: "Miya", gender: "F", age: 20, role: "Maskman" }
  // ];
}
