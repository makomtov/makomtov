import { Component, Input, ViewContainerRef } from '@angular/core';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { CustomModalComponent } from '../custom-modal/custom-modal.component';
import { FbServiceService } from '../services/fb-service.service';
import { RegisterComponent } from '../register/register.component';
import { PersonalDetailsComponent } from '../personal-details/personal-details.component';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() headerList;
  @Input() homeroute;

  public user;

  constructor(private modalService: NgbModal) { }

    Login() {
      const modalRef = this.modalService.open(RegisterComponent);
      modalRef.componentInstance.name = 'World';
    }
}
