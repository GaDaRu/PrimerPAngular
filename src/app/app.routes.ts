import { Routes } from '@angular/router';
import {RecordPageComponent} from "./pages/record-page/record-page.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./pages/home/home.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {RegisterPageComponent} from "./pages/register-page/register-page.component";
import {MyDiaryComponent} from "./pages/my-diary/my-diary.component";
import {HistoryMyDiaryComponent} from "./pages/history-my-diary/history-my-diary.component";
import {ListaTareasComponent} from "./pages/lista-tareas/lista-tareas.component";
import {JobsFinishedPageComponent} from "./pages/jobs-finished-page/jobs-finished-page.component";

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'record', component: RecordPageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegisterPageComponent},
  { path: 'diary', component: MyDiaryComponent },
  { path: 'historial-diario', component: HistoryMyDiaryComponent },
  { path: 'list-job', component: ListaTareasComponent },
  { path: 'finished-job', component: JobsFinishedPageComponent }
];
