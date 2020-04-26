import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Details} from '../../models/details.model';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-item-details-smart',
  template: `
    <app-item-details-dumb
      [details]="details$ | async"
      [selectedName]="selectedName$ | async"
      [shortInfo]="shortInfo$ | async"
    ></app-item-details-dumb>
  `
})
export class ItemDetailsSmartComponent {
  details$: Observable<Details> = this.route.data.pipe(map(data => data.details));
  selectedName$: Observable<string> = this.route.params.pipe(map(params => params.name));
  shortInfo$: Observable<string> = this.route.params.pipe(map(params => params.shortInfo));

  constructor(private route: ActivatedRoute) {}
}
