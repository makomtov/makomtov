import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AppComponent } from '../app.component';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { CustomModalComponent } from '../custom-modal/custom-modal.component';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  public user;

  constructor(private appCom: AppComponent,
              private modalDialogService: ModalDialogService,
              private viewContainer: ViewContainerRef) {

      this.user = appCom.LoginUser;
    }

  ngOnInit() {
    if (typeof this.user === 'undefined') {
      this.openSimpleModal();
    }
  }

  openSimpleModal() {
    this.modalDialogService.openDialog(this.viewContainer, {
      title: 'Custom child component',
      childComponent: CustomModalComponent,
      settings: {
        closeButtonClass: 'close theme-icon-close'
      }
    });
  }
}
