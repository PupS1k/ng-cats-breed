import {RouterModule, Routes} from '@angular/router';
import {ListItemDumbComponent} from './components/list-item/list-item-dumb.component';
import {ListResolver} from './services/list.resolver';
import {NgModule} from '@angular/core';
import {ListSmartComponent} from './components/list/list-smart.component';
import {ItemDetailsSmartComponent} from './components/item-details/item-details-smart.component';
import {DetailsResolver} from './services/details.resolver';
import {ItemStartDumbComponent} from './components/item-start/item-start-dumb.component';


const listRoutes: Routes = [
  {path: '', component: ListSmartComponent, resolve: {list: ListResolver}, children: [
      {path: '', component: ItemStartDumbComponent},
      {path: 'item/:name/:shortInfo/:id', component: ItemDetailsSmartComponent, resolve: {details: DetailsResolver}}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(listRoutes)],
})

export class AppRouting {}
