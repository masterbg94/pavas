import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { HomeComponent } from './modules/home/pages/home.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {title: 'Dom Naslovna'},
  },
  {
    path: 'contact',
    loadChildren: './modules/contact/contact.module#ContactModule',
    data: {title: 'Kontakt'},
  },
  {
    path: 'services',
    loadChildren: './modules/services/service.module#ServiceModule',
    data: {title: 'Usluge'},
  },
  {
    path: 'gallery',
    loadChildren: './modules/gallery/gallery.module#GaleryModule',
    data: {title: 'Galerija'},
  },
  {
    path: 'aboutus',
    loadChildren: './modules/aboutus/aboutus.module#AboutUsModule',
    data: {title: 'O Nama'},
  },
  {
    path: 'objects',
    loadChildren: './modules/objects/objects.module#ObjectsModule',
    data: {title: 'Tipski Objekti'},
  },
  {
    path: 'products',
    loadChildren: './modules/products/products.module#ProductsModule',
    data: {title: 'Dodatni Proizvodi'},
  },
  {
    path: 'objects/:id',
    loadChildren: './modules/property-detail/property-detail.module#PropertyDetailModule',
    data: {title: 'Detalji Objekta'}
  },
  {
    path: 'tehnology',
    loadChildren: './modules/tehnology/tehnology.module#TehnologyModule',
    data: {title: 'Tehnologije I Sistemi Gradnje'},
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
})
export class AppRoutingModule {}
