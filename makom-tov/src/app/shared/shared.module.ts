import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowModule } from 'ng-simple-slideshow';
import { CarouselComponent } from './carousel/carousel.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';

@NgModule({
  imports: [
    CommonModule,
    SlideshowModule
  ],
  declarations: [
    CarouselComponent,
    EditDetailsComponent
  ],
  exports:[
    CarouselComponent,
    EditDetailsComponent
  ]
})
export class SharedModule { }
