import {Component, Input} from '@angular/core';
import {Item} from '../../models/item.model';

@Component({
  selector: 'app-list-dumb',
  templateUrl: './list-dumb.component.html',
  styleUrls: ['./list-dumb.component.scss']
})
export class ListDumbComponent {
  @Input() list: Item[];
}
