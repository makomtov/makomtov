import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowModule } from 'ng-simple-slideshow';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  imports: [
    CommonModule,
    SlideshowModule
  ],
  declarations: [
    CarouselComponent
  ],
  exports:[
    CarouselComponent
  ]
})
export class SharedModule { }
