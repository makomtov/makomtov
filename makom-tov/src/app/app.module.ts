import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { FbServiceService } from './services/fb-service.service';

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
import { CustomModalComponent } from './custom-modal/custom-modal.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'reservation', component: ReservationComponent, canActivate: [LoginRouteGuardService]},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
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
    CustomModalComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    AngularMultiSelectModule,
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
    ModalDialogModule.forRoot()
  ],
  providers: [FbServiceService, LoginRouteGuardService, SharedService],
  entryComponents: [CustomModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
