import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DetailsService {
  constructor(private http: HttpClient) {
  }

  fetchDetails(id) {
    return this.http.get(`/tz20/cats/${id}.json`);
  }

}
