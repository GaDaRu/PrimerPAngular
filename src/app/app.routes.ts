import { Routes } from '@angular/router';
import {RecordPageComponent} from "./pages/record-page/record-page.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./pages/home/home.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {RegisterPageComponent} from "./pages/register-page/register-page.component";

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'record', component: RecordPageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegisterPageComponent}
];
