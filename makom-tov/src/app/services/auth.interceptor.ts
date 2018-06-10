import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from '../register/register.component';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router, private modalService: NgbModal) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.headers.get('No-Auth') === 'True') {
            return next.handle(req.clone());
        }
        if (localStorage.getItem('userToken') != null) {
            const clonedreq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('userToken'))
            });

            return next.handle(clonedreq).do(
                succ => { },
                err => {
                    if (err.status === 401) {
                        localStorage.removeItem('userToken');
                        localStorage.removeItem('currentUser');

                        this.router.navigateByUrl('/home');
                        const modalRef = this.modalService.open(RegisterComponent);
                    }
                }
            );
        } else {
            this.router.navigateByUrl('/home');
            const modalRef = this.modalService.open(RegisterComponent);
        }
    }
}
