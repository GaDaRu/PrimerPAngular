import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withFetch} from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {enviroment} from "../environments/enviroment";
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    MatSlideToggleModule,
    FontAwesomeModule,
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(enviroment.firebaseConfig)),
      provideFirestore(() => getFirestore()),
      AngularFireModule.initializeApp(enviroment.firebaseConfig),
      AngularFireAuthModule
    ])
  ]
};
