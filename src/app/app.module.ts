 import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeModule } from 'src/app/modules/home/home.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { NavigationMenuModule } from 'src/app/shared/components/navigation/navigation-menu.module';
import { ObjectsService } from 'src/app/shared/services/object.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    HomeModule,
    NavigationMenuModule,
    FooterModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
  ],
  providers: [ObjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
