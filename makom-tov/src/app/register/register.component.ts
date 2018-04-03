import { Component, ComponentRef } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FbServiceService } from '../services/fb-service.service';
import { FormArray, FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  loginForm: FormGroup;
  model;
loginvalue;
  constructor(public activeModal: NgbActiveModal,
    private fbService: FbServiceService,
    private fb: FormBuilder) {

    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, this.regexCheck(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i)]],
      pass: ['', [Validators.required, this.regexCheck(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i)]]
    });

    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      birthday: ['', Validators.required],
      phoneNumber: ['', [Validators.required, this.regexCheck(/^05\d{8}$/i)]],
      email: ['', [Validators.required, this.regexCheck(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i)]],
      pass: ['', [Validators.required, this.regexCheck(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i)]],
      gender: ['', Validators.required],
    });
  }

  regexCheck(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const regexCheck = nameRe.test(control.value);
      return !regexCheck ? { 'regexCheck': { value: control.value } } : null;
    };
  }

  FacebookLogin() {
    this.fbService.login();
    this.activeModal.close();
  }

  FacebookRegister() {
    this.fbService.loginWithOptions();
    this.activeModal.close();
  }

  onSubmitLogin() {
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
    this.loginvalue = this.loginForm.value;
    this.activeModal.close();
  }

  onSubmitRegister() {
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);
    this.activeModal.close();
  }
}
