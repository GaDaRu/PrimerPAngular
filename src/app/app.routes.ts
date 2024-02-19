import { Routes } from '@angular/router';
import {RecordPageComponent} from "./pages/record-page/record-page.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./pages/home/home.component";

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'record', component: RecordPageComponent}
];
