import {RouterModule, Routes} from '@angular/router';
import {ListItemComponent} from './components/list-item/list-item.component';
import {ListResolver} from './services/list.resolver';
import {NgModule} from '@angular/core';
import {ListComponent} from './components/list/list.component';


const listRoutes: Routes = [
  {path: '', component: ListComponent, resolve: {list: ListResolver}, children: [
      {path: 'list/:id', component: ListItemComponent, resolve: []}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(listRoutes)],
})

export class AppRouting {}
