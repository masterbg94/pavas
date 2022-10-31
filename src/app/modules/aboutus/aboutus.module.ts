import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ServicesModule } from 'src/app/shared/components/services/services.module';

import { AboutUsRouteModule } from './aboutus-route.module';
import { AboutusComponent } from './pages/aboutus.component';

@NgModule({
  imports: [
	CommonModule,
	MatButtonModule,
	MatIconModule,
   AboutUsRouteModule,
  ServicesModule,
  ],
  declarations: [
	AboutusComponent,
  ],
})
export class AboutUsModule {}
