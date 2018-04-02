import { Component, ComponentRef } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FbServiceService } from '../services/fb-service.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  heroForm: FormGroup;
  model;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+(\.[a-z]{2,4}$)';

  constructor(public activeModal: NgbActiveModal,
    private fbService: FbServiceService,
    private fb: FormBuilder) {

    this.createForm();
  }

  createForm() {
    this.heroForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      city: ['', Validators.required ],
      address: ['', Validators.required ],
      birthday: ['', Validators.required ],
      phoneNumber: ['', Validators.required ],
      mail: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      pass: ['', Validators.required ],
      gender: ['', Validators.required],
    });
  }

  FacebookLogin() {
    this.fbService.login();
    this.activeModal.close();
  }

  FacebookRegister() {
    this.fbService.loginWithOptions();
    this.activeModal.close();
  }

  onSubmit() {
    console.log(this.heroForm);
  }
}
