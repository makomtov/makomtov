import { Injectable } from '@angular/core';
import { FbServiceService } from './fb-service.service';
import { ModalDialogService } from 'ngx-modal-dialog';
import { CustomModalComponent } from '../custom-modal/custom-modal.component';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class LoginRouteGuardService implements CanActivate {

  constructor(
    private router: Router,
    private modalDialogService: ModalDialogService,
    private fbService: FbServiceService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      alert('עלייך להתחבר קודם');
    return false; // this.loginService.getLoginStatus();
  }
}
