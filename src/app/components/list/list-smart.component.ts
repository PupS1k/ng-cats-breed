import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {Item} from '../../models/item.model';

@Component({
  selector: 'app-list-smart',
  template: `
    <app-list-dumb
      [list]="list$ | async"
      (deleteItem)="onDeleteItem($event)"
    ></app-list-dumb>
  `
})
export class ListSmartComponent implements OnInit {
  list$: Observable<Item[]>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.list$ = this.route.data.pipe(
      map(data => data.list),
      map(items => items.map(item => {
        item.isDeleted = false;

        return item;
      }))
    );
  }

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
