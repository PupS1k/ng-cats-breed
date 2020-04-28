import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Cat} from '../models/cat.model';

interface ResponseData {
  basepath: string;
  data: Cat[];
}

@Injectable()
export class CatsService {
  constructor(private http: HttpClient) {
  }

  fetchCats() {
    return this.http.get<ResponseData>('/tz20/list.json').pipe(map(resData => resData.data));
  }

  fetchCatDetails(id) {
    return this.http.get(`/tz20/cats/${id}.json`);
  }

}
