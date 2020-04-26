import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ListService} from '../../services/list.service';
import {ActivatedRoute} from '@angular/router';
import {map, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  list$: Observable<any>;

  constructor(private listService: ListService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.list$ = this.route.data.pipe(takeUntil(this.destroy$), map(data => data.list));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
