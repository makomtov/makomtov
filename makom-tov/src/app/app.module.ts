import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { FbServiceService } from './services/fb-service.service';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { SharedService } from './shared/shared.service';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { DogsTableComponent } from './reservation/dogs-table/dogs-table.component';

import { FacebookModule } from 'ngx-facebook';
import {LoginRouteGuardService} from './services/login-route-guard.service';
import { MyDogsComponent } from './my-dogs/my-dogs.component';
import { RegisterComponent } from './register/register.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { HistoryReservationComponent } from './history-reservation/history-reservation.component';
import { ReservationDetailsComponent } from './history-reservation/reservation-details/reservation-details.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
    // { path: 'reservation', component: ReservationComponent, canActivate: [LoginRouteGuardService]},
  { path: 'reservation', component: ReservationComponent },
  { path: 'mydogs', component: MyDogsComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'profile', component: PersonalDetailsComponent, canActivate: [LoginRouteGuardService] },
  { path: 'history', component: HistoryReservationComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    HomeComponent,
    ReservationComponent,
    ContactComponent,
    LoginComponent,
    DogsTableComponent,
    MyDogsComponent,
    RegisterComponent,
    PersonalDetailsComponent,
    HistoryReservationComponent,
    ReservationDetailsComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    AngularMultiSelectModule,
    NgbModule.forRoot(),
    ModalDialogModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    ),
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCtQQ38QZzRx5e63c-WbBHvbDIK5zJfDd8'
    }),
    FacebookModule.forRoot(),
    ModalDialogModule.forRoot(),
    NgbModule.forRoot(),
    ReactiveFormsModule,
    ShowHidePasswordModule.forRoot()
  ],
  providers: [FbServiceService, LoginRouteGuardService, SharedService, RegisterComponent],
  entryComponents: [RegisterComponent, ReservationDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
