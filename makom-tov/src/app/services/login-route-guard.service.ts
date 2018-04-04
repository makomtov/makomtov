import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from '../register/register.component';

@Injectable()
export class LoginRouteGuardService implements CanActivate {

  constructor(private modalService: NgbModal) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const modalRef = this.modalService.open(RegisterComponent);
    return false;
  }
}
