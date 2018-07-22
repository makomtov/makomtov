import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  birthDate;
  vaccinationDate;

  @Input() dogDetails;

  constructor(private sharedService: SharedService,
    private fb: FormBuilder) { }

  dogDetailForm: FormGroup;

  ngOnInit() {
  }

  createForm() {
    if (this.dogDetails) {
      this.dogDetailForm = this.fb.group({
        DogNumber: [this.dogDetails.DogNumber],
        DogRabiesVaccine: [this.dogDetails.DogRabiesVaccine, Validators.required],
        DogBirthDate: [this.dogDetails.DogBirthDate, Validators.required],
        DogJump: [this.dogDetails.DogJump, Validators.required],
        DogDig: [this.dogDetails.DogDig, Validators.required],
        DogFriendlyWith: [this.dogDetails.DogFriendlyWith, Validators.required],
        DogNeuter: [this.dogDetails.DogNeuter, Validators.required],
        DogGender: [this.dogDetails.DogGender, Validators.required],
        DogComments: [this.dogDetails.DogComments, Validators.required],
        DogShvav: [this.dogDetails.DogShvav, Validators.required],
        DogType: [this.dogDetails.DogType, Validators.required],
        DogName: [this.dogDetails.DogName, Validators.required],
      });
    } else {
      this.dogDetailForm = this.fb.group({
        DogNumber: [''],
        DogRabiesVaccine: ['', Validators.required],
        DogBirthDate: ['', Validators.required],
        DogJump: ['', Validators.required],
        DogDig: ['', Validators.required],
        DogFriendlyWith: ['', Validators.required],
        DogNeuter: ['', Validators.required],
        DogGender: ['', Validators.required],
        DogComments: ['', Validators.required],
        DogShvav: ['', Validators.required],
        DogType: ['', Validators.required],
        DogName: ['', Validators.required],
      });
    }
  }

  initModal() {
    this.birthDate = '';
    this.vaccinationDate = '';
    this.createForm();
  }

  saveDog() {
    // TODO
  }

}
