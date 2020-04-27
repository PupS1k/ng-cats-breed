import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from '../../models/item.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-item-smart',
  template: `
    <app-list-item-dumb
      [item]="item"
      (deleteItem)="onDeleteItem($event)"
    ></app-list-item-dumb>
  `
})
export class ListItemSmartComponent {
  @Input() item: Item;

  @Output() deleteItem = new EventEmitter();

  constructor(private router: Router) {
  }

  getCurrentItemId() {
    const url =  this.router.url;
    return +url.slice(url.lastIndexOf('/') + 1, url.length);
  }

  onDeleteItem(id) {
    const currentItemId = this.getCurrentItemId();
    if (currentItemId === id) {
      this.router.navigate(['/']);
    }

    this.deleteItem.emit(id);
  }
}
