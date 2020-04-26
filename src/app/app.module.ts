import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListSmartComponent } from './components/list/list-smart.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import {ListService} from './services/list.service';
import {ListResolver} from './services/list.resolver';
import {RouterModule} from '@angular/router';
import {AppRouting} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { ItemDetailsSmartComponent } from './components/item-details/item-details-smart.component';
import {DetailsService} from './services/details.service';
import {DetailsResolver} from './services/details.resolver';
import {ItemDetailsDumbComponent} from './components/item-details/item-details-dumb.component';
import {ListDumbComponent} from './components/list/list-dumb.component';

@NgModule({
  declarations: [
    AppComponent,
    ListSmartComponent,
    ListItemComponent,
    ItemDetailsSmartComponent,
    ItemDetailsDumbComponent,
    ListDumbComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRouting
  ],
  providers: [ListService, ListResolver, DetailsService, DetailsResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
