import {Pipe, PipeTransform} from '@angular/core';
import {Item} from '../models/item.model';

@Pipe({name: 'sortList'})
export class SortListPipe implements PipeTransform {
  transform(value: Item[]) {
    const sortedList = value.sort((first, second) => {
      return first.name.toLowerCase() > second.name.toLowerCase() ? 1 : -1;
    });

    return sortedList.sort((first, second) => {
      if (first.isDeleted === second.isDeleted) {
        return 0;
      }
      return first.isDeleted && !second.isDeleted ? 1 : -1;
    });
  }
}
