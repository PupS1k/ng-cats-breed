import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {Cat} from '../../models/cat.model';
import {SpinnerService} from '../../services/spinner.service';

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
    map(cats => cats.map(cat => {
      cat.isDeleted = false;

      return cat;
    }))
  );

  isSpin$ = this.spinnerService.isSpin$;

  constructor(private route: ActivatedRoute, private spinnerService: SpinnerService) {}

  onDeleteCat(id) {
    this.cats$ = this.cats$.pipe(map((cats: Cat[]) => {
        return cats.map(cat => {
          if (cat.id === id) {
            cat.isDeleted = !cat.isDeleted;
          }

          return cat;
        });
      })
    );
  }
}
