import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { CarouselModule } from 'ngx-bootstrap';
import { HomeRoutingModule } from 'src/app/modules/home/home-routing.module';
import { HomeComponent } from 'src/app/modules/home/pages/home.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true
};

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule.forRoot(),
    MatButtonModule,
    SwiperModule,
  ],
  declarations: [
    HomeComponent
  ],
  exports: [],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class HomeModule {}
