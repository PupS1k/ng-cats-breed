import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {CatsService} from './cats.service';

@Injectable()
export class CatsResolver implements Resolve<Observable<any>> {
  constructor(private catsService: CatsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    return this.catsService.fetchCats();
  }
}
