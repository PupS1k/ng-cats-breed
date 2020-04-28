import {RouterModule, Routes} from '@angular/router';
import {CatsResolver} from './services/cats.resolver';
import {NgModule} from '@angular/core';
import {ListCatsSmartComponent} from './components/cats/list-cats-smart.component';
import {CatDetailsSmartComponent} from './components/cat-details/cat-details-smart.component';
import {CatDetailsResolver} from './services/cat-details.resolver';
import {CatStartDumbComponent} from './components/cat-start/cat-start-dumb.component';


const listRoutes: Routes = [
  {path: '', component: ListCatsSmartComponent, resolve: {cats: CatsResolver}, children: [
      {path: '', component: CatStartDumbComponent},
      {path: 'cat/:name/:shortInfo/:id', component: CatDetailsSmartComponent, resolve: {details: CatDetailsResolver}}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(listRoutes)],
})

export class AppRouting {}
