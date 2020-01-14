import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SmallComponentLibModule } from 'small-component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SmallComponentLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
