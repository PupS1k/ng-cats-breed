import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CatDetails} from '../../models/cat-details.model';

@Component({
  selector: 'app-cat-details-dumb',
  templateUrl: './cat-details-dumb.component.html',
  styleUrls: ['./cat-details-dumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatDetailsDumbComponent {
  @Input() details: CatDetails;
  @Input() selectedName: string;
  @Input() shortInfo: string;
}
