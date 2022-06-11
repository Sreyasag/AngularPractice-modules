import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ElementsModule } from './elements/elements.module';
import { CollectionsModule } from './collections/collections.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElementsModule,
    CollectionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
