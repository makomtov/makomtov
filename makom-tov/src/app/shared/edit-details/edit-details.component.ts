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
    'DogNumber': '',
    'DogName': '',
    'DogBirthDate': '',
    'DogType': '',
    'DogShvav': '',
    'DogComments': '',
    'DogImage': '',
    'DogGender': '',
    'DogNeuter': false,
    'DogRabiesVaccine': '' };

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

  initModal() {
    this.birthDate = '';
    this.vaccinationDate = '';
  }

  saveDog() {
    // TODO
  }

}
