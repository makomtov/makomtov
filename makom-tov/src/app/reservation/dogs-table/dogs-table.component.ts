import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-dogs-table',
  templateUrl: './dogs-table.component.html',
  styleUrls: ['./dogs-table.component.css']
})
export class DogsTableComponent implements OnInit {

  @Output() changeCheckbox = new EventEmitter();
  @Input() selectedDogs;

  constructor() { }

  ngOnInit() {
  }

}
