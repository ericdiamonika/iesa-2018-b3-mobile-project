import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ContactsPage } from '../pages/contacts/contacts';
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {CameraPage} from "../pages/camera/camera";
import {GoogleMapComponent} from "../components/google-map/google-map";
import { GooglemapPage} from "../pages/googlemap/googlemap";
import { Geolocation } from '@ionic-native/geolocation';

import {Contacts} from "@ionic-native/contacts";
import { CallNumber } from '@ionic-native/call-number';
import {WelcomePage} from "../pages/welcome/welcome";

const firebaseAuth = {
  apiKey: "AIzaSyAUc0s4FUFpYVamlGKJPYosM0aLWdNaz_M",
    authDomain: "demoss-96939.firebaseapp.com",
  databaseURL: "https://demoss-96939.firebaseio.com",
  projectId: "demoss-96939",
  storageBucket: "demoss-96939.appspot.com",
  messagingSenderId: "822302654432"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ContactsPage,
    RegisterPage,
    LoginPage,
    CameraPage,
    GoogleMapComponent,
    GooglemapPage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ContactsPage,
    RegisterPage,
    LoginPage,
    CameraPage,
    GoogleMapComponent,
    GooglemapPage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen, Camera,
    Contacts,
    CallNumber,
    SplashScreen, Camera,Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
