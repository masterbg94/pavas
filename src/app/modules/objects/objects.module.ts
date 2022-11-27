import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslateModule } from '@ngx-translate/core';
import { ObjectsRouteModule } from 'src/app/modules/objects/objects-route.module';
import { ObjectsComponent } from 'src/app/modules/objects/pages/objects.component';

@NgModule({
    imports: [
        CommonModule,
        ObjectsRouteModule,
        MatIconModule,
        MatButtonModule,
        MatTabsModule,
        TranslateModule,
    ],
  exports: [
    ObjectsComponent
  ],
  declarations: [
    ObjectsComponent
  ]
})
export class ObjectsModule {}
