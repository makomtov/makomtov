import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header = [{ name: 'דף הבית', component: 'HomeComponent' },
  { name: 'הזמנה', component: 'ReservationComponent' }]; 
}
