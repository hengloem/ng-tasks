import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    // Query Parameter
    this.route.queryParamMap.subscribe(params => console.log(params.get('id')));
  }

  ngOnInit() {
  }

}
