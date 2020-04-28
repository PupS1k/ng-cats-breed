import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Cat} from '../../models/cat.model';

@Component({
  selector: 'app-cat-dumb',
  templateUrl: './cat-dumb.component.html',
  styleUrls: ['./cat-dumb.component.scss']
})
export class CatDumbComponent {
  @Input() cat: Cat;

  @Output() deleteCat = new EventEmitter<number>();

  dateDelete: Date;

  onDeleteCat() {
    this.dateDelete = new Date();
    this.deleteCat.emit(this.cat.id);
  }
}
