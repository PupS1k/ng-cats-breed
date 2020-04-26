import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ListService} from './list.service';

@Injectable()
export class ListResolver implements Resolve<Observable<any>> {
  constructor(private listService: ListService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    return this.listService.fetchList();
  }
}
