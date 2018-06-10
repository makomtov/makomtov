import { Component, ComponentRef, ViewChild } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FbServiceService } from '../services/fb-service.service';
import { FormArray, FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { HttpRequestService } from '../services/http-request.service';
import { ConfirmModalComponent } from '../shared/confirm-modal/confirm-modal.component';
import { SelectModule } from 'ng2-select';
import { Router } from '@angular/router';

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
  WrongloginDetails = false;
  WrongRegisterDetails = false;
  DuplicateRegisterDetails = false;
  @ViewChild('content') content: any;
  cities = [];

  constructor(private router: Router,
    public activeModal: NgbActiveModal,
    private fbService: FbServiceService,
    private fb: FormBuilder,
    private httpReq: HttpRequestService,
    private confirmModal: ConfirmModalComponent,
    private modalService: NgbModal) {

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
    this.loginForm = this.fb.group({
      Useremail: ['', [Validators.required, this.regexCheck(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i)]],
      UserPaswrd: ['', [Validators.required, this.regexCheck(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i)]]
    });

    this.registerForm = this.fb.group({
      UserFirstName: ['', Validators.required],
      UserLastName: ['', Validators.required],
      Usercityname: ['', [Validators.required, this.cityCheck()]],
      Useraddress: ['', Validators.required],
      UserPhone1: ['', [Validators.required, this.regexCheck(/^0\d([\d]{0,1})\d{7}$/i)]],
      UserPhone2: ['', this.regexCheck(/^$|^0\d([\d]{0,1})\d{7}$/i)],
      VeterinarName: ['', Validators.required],
      VeterinarPhone1: ['', [Validators.required, this.regexCheck(/^0\d([\d]{0,1})\d{7}$/i)]],
      Useremail: ['', [Validators.required, this.regexCheck(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i)]],
      UserPaswrd: ['', [Validators.required, this.regexCheck(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i)]],
      accept: ['checked']
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
    this.httpReq.login(this.loginvalue.Useremail, this.loginvalue.UserPaswrd).then(loginSuccessfull => {
      if (loginSuccessfull) {
        this.activeModal.close();
        location.reload();
      }
    }).catch(err => {
      this.loginForm.reset();
      this.WrongloginDetails = true;
      console.log(err);
    });
  }

  onSubmitRegister() {
    if (this.registerForm.invalid) {
      return;
    }
    this.httpReq.signUp(this.registerForm.value).then(() => {
      this.activeModal.close();
      const modalRef = this.modalService.open(this.content);
      modalRef.componentInstance.text = 'נרשמת בהצלחה! אנא התחבר למערכת';
    }).catch(err => {
      this.DuplicateRegisterDetails = true;
      console.log(err);
    });
  }
}
