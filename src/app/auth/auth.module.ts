import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthRoutingModule } from './auth-routing.module';
import { TerminalModule } from '../terminal/terminal.module';

@NgModule({
  declarations: [SignUpComponent],
  imports: [CommonModule, TerminalModule, AuthRoutingModule],
})
export class AuthModule {}
