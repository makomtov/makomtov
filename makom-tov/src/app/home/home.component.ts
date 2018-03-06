import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pics = ['assets/dog1.jpg', 'assets/dog2.jpg', 'assets/dog3.jpg', 'assets/dog4.jpg'];

}
