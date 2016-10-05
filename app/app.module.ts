import { NgModule }      from '@angular/core';
import {FormsModule}      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Route, RouterModule } from '@angular/router';
import { AppComponent }   from './app.component';
import { OneComponent }   from './one.component';
import { AnotherComponent }   from './another.component';
import {AppService} from './app.service';
import { routing }              from './app.routing';

import 'rxjs/Rx';

@NgModule({
  imports:      [ BrowserModule, HttpModule, RouterModule, FormsModule, routing ],
  declarations: [ AppComponent, OneComponent, AnotherComponent ],
  providers: [AppService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
