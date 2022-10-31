import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MapComponent } from './map.component';

@NgModule({
  imports: [
	CommonModule,
	AgmCoreModule.forRoot({
		apiKey: 'AIzaSyDf0Z-oUxKPN65T17S_6eLWwyVc74UW4-A',
	}),
  ],
  declarations: [
		MapComponent,
  ],
  exports: [
	  MapComponent,
  ],
})
export class MapModule {}
