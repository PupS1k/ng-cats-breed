import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from '../../models/item.model';

@Component({
  selector: 'app-list-item-dumb',
  templateUrl: './list-item-dumb.component.html',
  styleUrls: ['./list-item-dumb.component.scss']
})
export class ListItemDumbComponent {
  @Input() item: Item;

  @Output() deleteItem = new EventEmitter<number>();

  dateDelete: Date;

  onDeleteItem() {
    this.dateDelete = new Date();
    this.deleteItem.emit(this.item.id);
  }
}
