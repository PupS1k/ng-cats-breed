import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import {ListService} from './services/list.service';
import {ListResolver} from './services/list.resolver';
import {RouterModule} from '@angular/router';
import {AppRouting} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRouting
  ],
  providers: [ListService, ListResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
