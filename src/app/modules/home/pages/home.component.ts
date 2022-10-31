import { Component, ViewChild } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  public show: boolean = true;

  public slides = [
    {
      image: 'profile3.png',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\n' +
        'nonumy eirmod tempor invidunt ut labore et dolore magna\n' +
        'aliquyam erat, sed diam voluptua. At vero eos et accusam et justo\n' +
        'duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n' +
        'takimata sanctus est Lorem ipsum dolor sit amet.'
    },
    {
      image: 'profile2.png',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\n' +
        'nonumy eirmod tempor invidunt ut labore et dolore magna\n' +
        'aliquyam erat, sed diam voluptua. At vero eos et accusam et justo\n' +
        'duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n' +
        'takimata sanctus est Lorem ipsum dolor sit amet.'
    },
    {
      image: 'profile1.png',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\n' +
        'nonumy eirmod tempor invidunt ut labore et dolore magna\n' +
        'aliquyam erat, sed diam voluptua. At vero eos et accusam et justo\n' +
        'duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n' +
        'takimata sanctus est Lorem ipsum dolor sit amet.'
    },

  ];

  public type: string = 'component';

  public disabled: boolean = false;

  public config: SwiperConfigInterface = {
    direction: 'vertical',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

  private scrollbar: SwiperScrollbarInterface = {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true
  };

  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false
  };

  @ViewChild(SwiperComponent) componentRef: SwiperComponent;
  @ViewChild(SwiperDirective) directiveRef: SwiperDirective;

  constructor() {}

  public toggleType() {
    this.type = (this.type === 'component') ? 'directive' : 'component';
  }

  public toggleDisabled() {
    this.disabled = !this.disabled;
  }

  public toggleDirection() {
    this.config.direction = (this.config.direction === 'horizontal') ? 'vertical' : 'horizontal';
  }

  public toggleSlidesPerView() {
    if (this.config.slidesPerView !== 1) {
      this.config.slidesPerView = 1;
    } else {
      this.config.slidesPerView = 2;
    }
  }

  public toggleOverlayControls() {
    if (this.config.navigation) {
      this.config.scrollbar = false;
      this.config.navigation = false;

      this.config.pagination = this.pagination;
    } else if (this.config.pagination) {
      this.config.navigation = false;
      this.config.pagination = false;

      this.config.scrollbar = this.scrollbar;
    } else {
      this.config.scrollbar = false;
      this.config.pagination = false;

      this.config.navigation = true;
    }

    if (this.type === 'directive') {
      this.directiveRef.setIndex(0);
    } else {
      this.componentRef.directiveRef.setIndex(0);
    }
  }

  public onIndexChange(index: number) {
    console.log('Swiper index: ', index);
  }
  public next(index) {
    this.directiveRef.setIndex(index);
  }
}
