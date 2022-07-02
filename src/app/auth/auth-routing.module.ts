import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [{ path: 'auth/signup', component: SignUpComponent }];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
