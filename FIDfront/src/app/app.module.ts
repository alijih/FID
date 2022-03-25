import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/home/landing/landing.component';
import { CargaComponent } from './components/carga/carga.component';
import { DonarComponent } from './components/donar/donar/donar.component';
import { NextEventComponent } from './components/NextEvent/next-event/next-event.component';
import { NewsComponent } from './components/News/news/news.component';
import { ASIComponent } from './components/Bibliogafia/asi/asi.component';
import { LandingGaleryComponent } from './components/Galery/landing-galery/landing-galery.component';
import { NewOpenedComponent } from './components/News/new-opened/new-opened.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    CargaComponent,
    DonarComponent,
    NextEventComponent,
    NewsComponent,
    ASIComponent,
    LandingGaleryComponent,
    NewOpenedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
