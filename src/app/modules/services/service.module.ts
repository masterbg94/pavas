import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ServiceComponent } from 'src/app/modules/services/pages/service.component';
import { ServiceRouteModule } from 'src/app/modules/services/service-route.module';
import { ServicesModule } from 'src/app/shared/components/services/services.module';

@NgModule({
  imports: [
    ServiceRouteModule,
    ServicesModule,
    CommonModule,
  ],
  declarations: [
    ServiceComponent
  ]
})
export class ServiceModule {}
