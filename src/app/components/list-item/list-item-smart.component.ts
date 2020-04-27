import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from '../../models/item.model';

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

  onDeleteItem(id) {
    this.deleteItem.emit(id);
  }
}
