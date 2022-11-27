import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule, MatTabsModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { TehnologyComponent } from 'src/app/modules/tehnology/pages/tehnology.component';
import { TehnologyRouteModule } from 'src/app/modules/tehnology/tehnology-route.module';

@NgModule({
    imports: [
        CommonModule,
        TehnologyRouteModule,
        MatTabsModule,
        MatTableModule,
        TranslateModule,
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
