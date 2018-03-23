import { Component, Input, ViewContainerRef } from '@angular/core';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { CustomModalComponent } from '../custom-modal/custom-modal.component';
import { FbServiceService } from '../services/fb-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() headerList;
  @Input() homeroute;

  public user;

  constructor(
    private modalDialogService: ModalDialogService,
    private viewContainer: ViewContainerRef,
    private fbService: FbServiceService) { }

  openSimpleModal() {
    this.modalDialogService.openDialog(this.viewContainer, {
      title: 'Custom child component',
      childComponent: CustomModalComponent,
      settings: {
        closeButtonClass: 'close theme-icon-close'
      },
      actionButtons:
      [
        {
          text: 'התחבר באמצעות פייסבוק', onAction: () =>
            new Promise((resolve: any) => {this.fbService.loginWithOptions();
            setTimeout(() => {
              resolve();
            }, 20);
          })},
        { text: 'הרשם', onAction: () => true }
      ]
    });
  }
}
