import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-cat-start-dumb',
  templateUrl: './cat-start-dumb.component.html',
  styleUrls: ['./cat-start-dumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatStartDumbComponent {}
