import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeModule } from 'src/app/modules/home/home.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { NavigationMenuModule } from 'src/app/shared/components/navigation/navigation-menu.module';
import { ObjectsService } from 'src/app/shared/services/object.service';
import { AppComponent } from './app.component';
// translate
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

export function TranslationLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader, useFactory: TranslationLoaderFactory, deps: [HttpClient],
            },
        }),
        HttpClientModule,
        NgbDropdownModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ],
  providers: [ObjectsService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
