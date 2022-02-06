import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CalculadoraModule} from './calculadora/calculadora.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalculadoraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
