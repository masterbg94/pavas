import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule, MatTabsModule } from '@angular/material';
import { TehnologyComponent } from 'src/app/modules/tehnology/pages/tehnology.component';
import { TehnologyRouteModule } from 'src/app/modules/tehnology/tehnology-route.module';

@NgModule({
  imports: [
    CommonModule,
    TehnologyRouteModule,
    MatTabsModule,
    MatTableModule
  ],
  declarations: [
    TehnologyComponent
  ],
  exports: [
    TehnologyComponent
  ]
})
export class TehnologyModule {

}
