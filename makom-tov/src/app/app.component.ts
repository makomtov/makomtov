import { Component, ViewContainerRef } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header =
    [
    { name: 'הזמנה חדשה', route: '/reservation'},
    { name: 'הכלבים שלי', route: '/mydogs'},
    { name: 'פרטים אישיים', route: '/profile'},
    { name: 'היסטוריית הזמנות', route: '/history'},
    { name: 'צור קשר', route: '/contact'}
  ];

    home = '/home';

    LoginUser;

  constructor() { }
}
