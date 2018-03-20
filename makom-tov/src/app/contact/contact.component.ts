import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  lat = 32.387967;
  lng = 34.912901;

  constructor() { }

  ngOnInit() {
  }
}
