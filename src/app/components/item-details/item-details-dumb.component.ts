import {Component, Input} from '@angular/core';
import {Details} from '../../models/details.model';

@Component({
  selector: 'app-item-details-dumb',
  templateUrl: './item-details-dumb.component.html',
  styleUrls: ['./item-details-dumb.component.scss']
})
export class ItemDetailsDumbComponent {
  @Input() details: Details;
  @Input() selectedName: string;
  @Input() shortInfo: string;
}
