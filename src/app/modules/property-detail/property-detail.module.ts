import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgxGalleryModule } from 'ngx-gallery';

import { MapModule } from '../../shared/components/map/map.module';

import { PropertyDetailComponent } from './pages/property-detail.component';
import { PropertyDetailRouteModule } from './property-detail-route.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
	CommonModule,
	PropertyDetailRouteModule,
  MatChipsModule,
  NgxGalleryModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MapModule,
  MatSnackBarModule,
  MapModule
  ],
  declarations: [
	PropertyDetailComponent,
  ],
  exports: [],
})
export class PropertyDetailModule {}
