import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {ListService} from '../../services/list.service';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {Item} from '../../models/item.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  list$: Observable<Item[]> = this.route.data.pipe(map(data => data.list));

  constructor(private route: ActivatedRoute) { }
}
