import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleComponentLibModule } from 'sample-component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SampleComponentLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
