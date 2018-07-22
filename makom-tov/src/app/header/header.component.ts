import { Component, Input, ViewContainerRef } from '@angular/core';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { FbServiceService } from '../services/fb-service.service';
import { RegisterComponent } from '../register/register.component';
import { PersonalDetailsComponent } from '../personal-details/personal-details.component';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() headerList;
  @Input() homeroute;

  user = JSON.parse(localStorage.getItem('currentUser'));

  constructor(private router: Router,
    private modalService: NgbModal) { }

    login() {
      const modalRef = this.modalService.open(RegisterComponent);
    }

    logout() {
      localStorage.removeItem('userToken');
      localStorage.removeItem('currentUser');
      this.user = null;
      this.router.navigateByUrl('/');
    }
}
