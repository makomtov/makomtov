import { Component, ViewContainerRef } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header = [{ name: 'הזמנה חדשה', route: '/reservation', isNeedLogin: true },
    { name: 'הכלבים שלי', route: '/mydogs', isNeedLogin: true},
    { name: 'פרטים אישיים', route: '/profile', isNeedLogin: true },
    { name: 'היסטוריית הזמנות', route: '/history', isNeedLogin: true },
    { name: 'צור קשר', route: '/contact', isNeedLogin: false}];

    home = '/home';

    LoginUser;

  constructor() { }
}
