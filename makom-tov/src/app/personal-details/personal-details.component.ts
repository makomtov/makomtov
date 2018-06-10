import { Component, ComponentRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';
import { HttpRequestService } from '../services/http-request.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent {

  personalDetailsForm: FormGroup;
  model;
  user = JSON.parse(localStorage.getItem('currentUser'));
  cities = [];

  constructor(private fb: FormBuilder,
    private reg: RegisterComponent,
    private httpReq: HttpRequestService) {

    this.createForm();

    httpReq.getCities().then(cities => {
      let id = 0;
      cities.City.forEach(element => {
        this.cities.push({ 'id': id++, 'itemName': element.Heb });
      });
      console.log(this.cities);

    });
  }

  createForm() {
    this.personalDetailsForm = this.fb.group({
      UserFirstName: [this.user !== undefined ? this.user.UserFirstName : '', Validators.required],
      UserLastName: [this.user !== undefined ? this.user.UserLastName : '', Validators.required],
      UserCityName: [this.user !== undefined ? this.user.UserCityName : '', [Validators.required, this.cityCheck()]],
      UserAddress: [this.user !== undefined ? this.user.UserAddress : '', Validators.required],
      UserPhone1: [this.user !== undefined ? this.user.UserPhone1 : '',
      [Validators.required, this.regexCheck(/^$|^0\d([\d]{0,1})\d{7}$/i)]],
      UserPhone2: [this.user !== undefined ? this.user.UserPhone2 : '', this.regexCheck(/^$|^0\d([\d]{0,1})\d{7}$/i)],
      VeterinarName: [this.user !== undefined ? this.user.VeterinarName : '', Validators.required],
      VeterinarPhone1: [this.user !== undefined ? this.user.VeterinarPhone1 : '',
      [Validators.required, this.regexCheck(/^$|^0\d([\d]{0,1})\d{7}$/i)]],
    });
  }

  cityCheck(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      let cityCheck = false;
      cityCheck = this.cities.find((element) => {
        if (element.itemName === control.value) {
          return true;
        }
      });
      return !cityCheck ? { 'cityCheck': { value: control.value } } : null;
    };
  }

  regexCheck(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const regexCheck = nameRe.test(control.value);
      return !regexCheck ? { 'regexCheck': { value: control.value } } : null;
    };
  }

  onSubmitRegister() {
    const allUserDetails = _.merge(this.user, this.personalDetailsForm.value);
    this.httpReq.updateUserDetails(allUserDetails);
  }
}
