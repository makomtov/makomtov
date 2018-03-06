import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header = [{ name: 'הזמנה חדשה', route: '/reservation' },
    { name: 'הכלבים שלי', route: '/reservation' },
    { name: 'צור קשר', route: '/reservation' }];

    home = "/home";
}
