import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxGalleryModule } from 'ngx-gallery';
import { ProductsRoutingModule } from 'src/app/modules/products/products-routing.module';
import { ProductsComponent } from './products.component';

@NgModule({
    imports: [
        CommonModule,
        ProductsRoutingModule,
        NgxGalleryModule,
    ],
  declarations: [ProductsComponent],
})
export class ProductsModule {
}
