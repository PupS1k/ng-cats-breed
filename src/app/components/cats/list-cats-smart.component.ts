import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {Cat} from '../../models/cat.model';
import {SpinnerService} from '../../services/spinner.service';
import {CatsService} from '../../services/cats.service';

@Component({
  selector: 'app-list-cats-smart',
  template: `
    <app-list-cats-dumb
      [cats]="cats$ | async"
      [isSpin]="isSpin$ | async"
      (deleteCat)="onDeleteCat($event)"
    ></app-list-cats-dumb>
  `
})
export class ListCatsSmartComponent {
  cats$ = this.route.data.pipe(
    map(data => data.cats),
    map(cats => this.catsService.addIsDeleted(cats))
  );

  isSpin$ = this.spinnerService.isSpin$;

  constructor(
    private route: ActivatedRoute,
    private spinnerService: SpinnerService,
    private catsService: CatsService
  ) {}

  onDeleteCat(id) {
    this.cats$ = this.cats$.pipe(map((cats: Cat[]) => this.catsService.changeIsDeleted(cats, id)));
  }
}
