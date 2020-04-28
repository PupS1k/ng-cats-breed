import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Cat} from '../../models/cat.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cat-smart',
  template: `
    <app-cat-dumb
      [cat]="cat"
      (deleteCat)="onDeleteCat($event)"
    ></app-cat-dumb>
  `
})
export class CatSmartComponent {
  @Input() cat: Cat;

  @Output() deleteCat = new EventEmitter();

  constructor(private router: Router) {
  }

  getCurrentCatId() {
    const url =  this.router.url;
    return +url.slice(url.lastIndexOf('/') + 1, url.length);
  }

  onDeleteCat(id) {
    const currentCatId = this.getCurrentCatId();
    if (currentCatId === id) {
      this.router.navigate(['/']);
    }

    this.deleteCat.emit(id);
  }
}
