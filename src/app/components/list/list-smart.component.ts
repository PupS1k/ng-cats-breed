import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {Item} from '../../models/item.model';

@Component({
  selector: 'app-list-smart',
  template: `
    <app-list-dumb
      [list]="list$ | async"
    ></app-list-dumb>
  `
})
export class ListSmartComponent {
  list$: Observable<Item[]> = this.route.data.pipe(map(data => data.list));

  constructor(private route: ActivatedRoute) {}
}
