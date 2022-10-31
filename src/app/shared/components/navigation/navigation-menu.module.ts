import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { NavigationMenuComponent } from './navigation-menu.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
	CommonModule,
	RouterModule,
  MatIconModule,
  NgbModule
  ],
  declarations: [
	  NavigationMenuComponent,
  ],
  exports: [
	  NavigationMenuComponent,
  ],
})

export class NavigationMenuModule {}
