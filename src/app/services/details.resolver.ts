import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {DetailsService} from './details.service';

@Injectable()
export class DetailsResolver implements Resolve<Observable<any>> {
  constructor(private detailsService: DetailsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    const id = +route.params.id;
    return this.detailsService.fetchDetails(id);
  }
}
