import { Injectable } from '@angular/core';
import { FbServiceService } from './fb-service.service';
import { ModalDialogService } from 'ngx-modal-dialog';
import { CustomModalComponent } from '../custom-modal/custom-modal.component';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from '../register/register.component';

@Injectable()
export class LoginRouteGuardService implements CanActivate {

  constructor(
    private router: Router,
    private modalDialogService: ModalDialogService,
    private fbService: FbServiceService,
     private modalService: NgbModal) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const modalRef = this.modalService.open(RegisterComponent);
      return false;
    }
  }
