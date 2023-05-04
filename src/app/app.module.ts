import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component'
import { MenuComponent } from './components/menu.component';
import { Button } from './components/button.component';
import { EntryDataComponent } from './components/entry-data.component'

@NgModule({
  declarations: [
    AppComponent, HelloComponent, MenuComponent, Button, EntryDataComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
