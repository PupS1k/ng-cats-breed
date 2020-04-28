import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Cat} from '../../models/cat.model';

@Component({
  selector: 'app-list-cats-dumb',
  templateUrl: './list-cats-dumb.component.html',
  styleUrls: ['./list-cats-dumb.component.scss']
})
export class ListCatsDumbComponent {
  @Input() cats: Cat[];
  @Input() isSpin: boolean;

  @Output() deleteCat = new EventEmitter();

  onDeleteCat(id) {
    this.deleteCat.emit(id);
  }
}
