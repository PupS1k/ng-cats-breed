import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {Item} from '../../models/item.model';
import {SpinnerService} from '../../services/spinner.service';

@Component({
  selector: 'app-list-smart',
  template: `
    <app-list-dumb
      [list]="list$ | async"
      [isSpin]="isSpin$ | async"
      (deleteItem)="onDeleteItem($event)"
    ></app-list-dumb>
  `
})
export class ListSmartComponent {
  list$ = this.route.data.pipe(
    map(data => data.list),
    map(items => items.map(item => {
      item.isDeleted = false;

      return item;
    }))
  );

  isSpin$ = this.spinnerService.isSpin$;

  constructor(private route: ActivatedRoute, private spinnerService: SpinnerService) {}

  onDeleteItem(id) {
    this.list$ = this.list$.pipe(map((items: Item[]) => {
        return items.map(item => {
          if (item.id === id) {
            item.isDeleted = !item.isDeleted;
          }

          return item;
        });
      })
    );
  }
}
