import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Item} from '../models/item.model';

interface ResponseData {
  basepath: string;
  data: Item[];
}

@Injectable()
export class ListService {
  constructor(private http: HttpClient) {
  }

  fetchList() {
    return this.http.get<ResponseData>('/tz20/list.json').pipe(map(resData => resData.data));
  }

}
