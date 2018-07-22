import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowModule } from 'ng-simple-slideshow';
import { CarouselComponent } from './carousel/carousel.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SlideshowModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CarouselComponent,
    EditDetailsComponent,
    ConfirmModalComponent
  ],
  exports: [
    CarouselComponent,
    EditDetailsComponent,
    ConfirmModalComponent
  ]
})
export class SharedModule { }
