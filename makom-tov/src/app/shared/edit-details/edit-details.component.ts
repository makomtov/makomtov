import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  birthDate;
  vaccinationDate;

  @Input() dogDetails = {
    'id': '',
    'name': "",
    'birthDate': '',
    'type': '',
    'shvav': '',
    'comments': '',
    'image': '',
    'gender': '',
    'isNeuter': false,
    'vaccinationDate': '' };

  constructor(private sharedService : SharedService) { }

  ngOnInit() {
  }

  initModal() {
    this.birthDate = "";
    this.vaccinationDate = "";
  }

  saveDog(){
    // TODO
  }

}
