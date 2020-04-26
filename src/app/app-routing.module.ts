import {RouterModule, Routes} from '@angular/router';
import {ListItemComponent} from './components/list-item/list-item.component';
import {ListResolver} from './services/list.resolver';
import {NgModule} from '@angular/core';
import {ListComponent} from './components/list/list.component';
import {ItemDetailsSmartComponent} from './item-details/item-details-smart.component';
import {DetailsResolver} from './services/details.resolver';


const listRoutes: Routes = [
  {path: '', component: ListComponent, resolve: {list: ListResolver}, children: [
      {path: 'item/:name/:shortInfo/:id', component: ItemDetailsSmartComponent, resolve: {details: DetailsResolver}}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(listRoutes)],
})

export class AppRouting {}
