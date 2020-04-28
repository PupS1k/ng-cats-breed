import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListCatsSmartComponent } from './components/cats/list-cats-smart.component';
import { CatDumbComponent } from './components/cat/cat-dumb.component';
import {CatsService} from './services/cats.service';
import {CatsResolver} from './services/cats.resolver';
import {RouterModule} from '@angular/router';
import {AppRouting} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CatDetailsSmartComponent } from './components/cat-details/cat-details-smart.component';
import {CatDetailsResolver} from './services/cat-details.resolver';
import {CatDetailsDumbComponent} from './components/cat-details/cat-details-dumb.component';
import {ListCatsDumbComponent} from './components/cats/list-cats-dumb.component';
import {CatStartDumbComponent} from './components/cat-start/cat-start-dumb.component';
import {SortListPipe} from './pipes/sort-list.pipe';
import {CatSmartComponent} from './components/cat/cat-smart.component';
import {SpinnerComponent} from './shared/spinner/spinner.component';
import {SpinnerService} from './services/spinner.service';
import {ReqInterceptor} from './services/http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ListCatsSmartComponent,
    CatDumbComponent,
    CatSmartComponent,
    CatDetailsSmartComponent,
    CatDetailsDumbComponent,
    CatStartDumbComponent,
    ListCatsDumbComponent,
    SortListPipe,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRouting
  ],
  providers: [
    CatsService,
    CatsResolver,
    CatDetailsResolver,
    SpinnerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ReqInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
