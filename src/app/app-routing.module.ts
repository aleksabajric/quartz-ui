import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import {CallbackComponent} from "./callback/callback.component";
import {AuthGuard} from "./auth.guard";
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'callback', component: CallbackComponent},
  { path: 'login', component: AppComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
