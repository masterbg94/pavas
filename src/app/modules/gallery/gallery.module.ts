import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';
import { GalleryRouteModule } from 'src/app/modules/gallery/gallery-route.module';
import { GalleryComponent } from 'src/app/modules/gallery/pages/gallery.component';

@NgModule({
    imports: [
        CommonModule,
        GalleryRouteModule,
        Angular2ImageGalleryModule,
        TranslateModule,
    ],
  declarations: [
    GalleryComponent
  ],
  exports: [
    GalleryComponent
  ],
  providers: [
  ]
})
export class GaleryModule {}
