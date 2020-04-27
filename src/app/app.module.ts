import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListSmartComponent } from './components/list/list-smart.component';
import { ListItemDumbComponent } from './components/list-item/list-item-dumb.component';
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
import {ItemStartDumbComponent} from './components/item-start/item-start-dumb.component';
import {SortListPipe} from './pipes/sortList.pipe';
import {ListItemSmartComponent} from './components/list-item/list-item-smart.component';

@NgModule({
  declarations: [
    AppComponent,
    ListSmartComponent,
    ListItemDumbComponent,
    ListItemSmartComponent,
    ItemDetailsSmartComponent,
    ItemDetailsDumbComponent,
    ItemStartDumbComponent,
    ListDumbComponent,
    SortListPipe
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
