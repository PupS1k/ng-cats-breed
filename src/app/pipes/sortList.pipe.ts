import {Pipe, PipeTransform} from '@angular/core';
import {Item} from '../models/item.model';

@Pipe({name: 'sortList'})
export class SortListPipe implements PipeTransform {
  transform(value: Item[]) {
    return value.sort((first, second) => {
      return first.name.toLowerCase() > second.name.toLowerCase() ? 1 : -1;
    });
  }
}
