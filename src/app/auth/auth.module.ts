import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthRoutingModule } from './auth-routing.module';
import { TerminalModule } from '../terminal/terminal.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { OauthIconsComponent } from './components/oauth-icons/oauth-icons.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SignUpComponent, OauthIconsComponent],
  imports: [
    CommonModule,
    TerminalModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthRoutingModule,
  ],
})
export class AuthModule {}
