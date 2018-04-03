import { Component, ComponentRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent {

  personalDetailsForm: FormGroup;
  model;

  constructor(private fb: FormBuilder,
    private reg: RegisterComponent) {

    this.createForm();
  }

  createForm() {
    this.personalDetailsForm = this.fb.group({
      firstName: [(this.reg.loginvalue !== undefined) &&
        (this.reg.loginvalue.get('firstName') !== undefined) ? this.reg.loginvalue.get('firstName') : 'ריק', Validators.required],
      lastName: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      birthday: ['', Validators.required],
      phoneNumber: ['', [Validators.required, this.regexCheck(/^05\d{8}$/i)]],
      gender: ['', Validators.required],
    });
  }

  regexCheck(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const regexCheck = nameRe.test(control.value);
      return !regexCheck ? { 'regexCheck': { value: control.value } } : null;
    };
  }
}
