import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {CatDetails} from '../../models/cat-details.model';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-cat-details-smart',
  template: `
    <app-cat-details-dumb
      [details]="details$ | async"
      [selectedName]="selectedName$ | async"
      [shortInfo]="shortInfo$ | async"
    ></app-cat-details-dumb>
  `
})
export class CatDetailsSmartComponent {
  details$: Observable<CatDetails> = this.route.data.pipe(map(data => data.details));
  selectedName$: Observable<string> = this.route.params.pipe(map(params => params.name));
  shortInfo$: Observable<string> = this.route.params.pipe(map(params => params.shortInfo));

  constructor(private route: ActivatedRoute) {}
}
