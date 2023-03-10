import { ProfilComponent } from './components/profil/profil.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { HotToastModule } from '@ngneat/hot-toast';
import { ReactiveFormsModule } from '@angular/forms';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { UyelerComponent } from './components/uyeler/uyeler.component';
import { KategorilerComponent } from './components/kategoriler/kategoriler.component';
import { SporComponent } from './components/kategoriler/spor/spor.component';
import { TeknolojilerComponent } from './components/kategoriler/teknolojiler/teknolojiler.component';
import { GundemComponent } from './components/kategoriler/gundem/gundem.component';
import { SiyasetComponent } from './components/kategoriler/siyaset/siyaset.component';
import { FeaturedComponent } from './components/featured/featured.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProfilComponent,
    UyelerComponent,
    KategorilerComponent,
    SporComponent,
    TeknolojilerComponent,
    GundemComponent,
    SiyasetComponent,
    FeaturedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    HotToastModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
