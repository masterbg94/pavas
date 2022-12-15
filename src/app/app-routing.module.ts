import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { HomeComponent } from './modules/home/pages/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Dom Naslovna|Montazne kuce',
      description: 'Firma osnovana 93.godine i lider smo na trzistu montaznih kuca.Koristimo prirodne materijale za montazne kuce i savremenu tehnologiju sa vrhunskim strucnjacima',
      ogTitle: 'Dom Naslovna|Montazne kuce',
    },
  },
  {
    path: 'contact',
    loadChildren: './modules/contact/contact.module#ContactModule',
    data: {
      title: 'Kontakt|Montazne kuce Dom',
      description: 'Firma osnovana 93.godine i lider smo na trzistu montaznih kuca.Koristimo prirodne materijale za montazne kuce i savremenu tehnologiju sa vrhunskim strucnjacima',
      ogTitle: 'Kontakt|Montazne kuce Dom',
    },
  },
  {
    path: 'services',
    loadChildren: './modules/services/service.module#ServiceModule',
    data: {
      title: 'Usluge|Montazne kuce Dom',
      description: 'Firma osnovana 93.godine i lider smo na trzistu montaznih kuca.Koristimo prirodne materijale za montazne kuce i savremenu tehnologiju sa vrhunskim strucnjacima',
      ogTitle: 'Usluge|Montazne kuce Dom',
    },
  },
  {
    path: 'gallery',
    loadChildren: './modules/gallery/gallery.module#GaleryModule',
    data: {
      title: 'Galerija|Montazne kuce Dom',
      description: 'Firma osnovana 93.godine i lider smo na trzistu montaznih kuca.Koristimo prirodne materijale za montazne kuce i savremenu tehnologiju sa vrhunskim strucnjacima',
      ogTitle: 'Galerija|Montazne kuce Dom',
    },
  },
  {
    path: 'aboutus',
    loadChildren: './modules/aboutus/aboutus.module#AboutUsModule',
    data: {
      title: 'O Nama|Montazne kuce Dom',
      description: 'Firma osnovana 93.godine i lider smo na trzistu montaznih kuca.Koristimo prirodne materijale za montazne kuce i savremenu tehnologiju sa vrhunskim strucnjacima',
      ogTitle: 'O Nama|Montazne kuce Dom',
    },
  },
  {
    path: 'objects',
    loadChildren: './modules/objects/objects.module#ObjectsModule',
    data: {
      title: 'Tipski Objekti|Montazne kuce Dom',
      description: 'Firma osnovana 93.godine i lider smo na trzistu montaznih kuca.Koristimo prirodne materijale za montazne kuce i savremenu tehnologiju sa vrhunskim strucnjacima',
      ogTitle: 'Tipski Objekti|Montazne kuce Dom',
    },
  },
  {
    path: 'products',
    loadChildren: './modules/products/products.module#ProductsModule',
    data: {
      title: 'Dodatni Proizvodi|Montazne kuce Dom',
      description: 'Firma osnovana 93.godine i lider smo na trzistu montaznih kuca.Koristimo prirodne materijale za montazne kuce i savremenu tehnologiju sa vrhunskim strucnjacima',
      ogTitle: 'Dodatni Proizvodi|Montazne kuce Dom',
    },
  },
  {
    path: 'objects/:id',
    loadChildren: './modules/property-detail/property-detail.module#PropertyDetailModule',
    data: {
      title: 'Detalji Objekta|Montazne kuce Dom',
      description: 'Firma osnovana 93.godine i lider smo na trzistu montaznih kuca.Koristimo prirodne materijale za montazne kuce i savremenu tehnologiju sa vrhunskim strucnjacima',
      ogTitle: 'Detalji Objekta|Montazne kuce Dom',
    },
  },
  {
    path: 'tehnology',
    loadChildren: './modules/tehnology/tehnology.module#TehnologyModule',
    data: {
      title: 'Tehnologije i sistemi gradnje montaznih kuca',
      description: 'Firma osnovana 93.godine i lider smo na trzistu montaznih kuca.Koristimo prirodne materijale za montazne kuce i savremenu tehnologiju sa vrhunskim strucnjacima',
      ogTitle: 'Tehnologije i sistemi gradnje montaznih kuca',
    },
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
export class AppRoutingModule {
}
