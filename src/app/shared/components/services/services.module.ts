import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { ServicesComponent } from 'src/app/shared/components/services/services.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    TranslateModule,
    TranslateModule,
  ],
  declarations: [
    ServicesComponent
  ],
  exports: [
    ServicesComponent
  ]
})
export class ServicesModule {}
