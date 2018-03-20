import { Component, ViewContainerRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header = [{ name: 'הזמנה חדשה', route: '/reservation' },
    { name: 'הכלבים שלי', route: '/reservation' },
    { name: 'צור קשר', route: '/contact' }];

    home = '/home';

    LoginUser;

  constructor(private http: HttpClient) { }
}
