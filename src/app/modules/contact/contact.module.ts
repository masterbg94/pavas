import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';
import { MapModule } from 'src/app/shared/components/map/map.module';
import { ServicesModule } from 'src/app/shared/components/services/services.module';

import { ContactRouteModule } from './contact-route.module';
import { ContactComponent } from './pages/contact.component';

@NgModule({
    imports: [
        ContactRouteModule,
        CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule,
        MatFormFieldModule,
        MatButtonModule,
        MatSnackBarModule,
        MapModule,
        ServicesModule,
        TranslateModule,
    ],
  declarations: [
	ContactComponent,
  ],
  exports: [],
})
export class ContactModule {
  form: FormGroup;
}
