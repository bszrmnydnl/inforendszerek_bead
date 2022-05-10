import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OktatoComponent } from './oktato/oktato.component';
import { HallgatoComponent } from './hallgato/hallgato.component';
import { KurzusComponent } from './kurzus/kurzus.component';
import { TantargyComponent } from './tantargy/tantargy.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OktatoComponent,
    HallgatoComponent,
    KurzusComponent,
    TantargyComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
