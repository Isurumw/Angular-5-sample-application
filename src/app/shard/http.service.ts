import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  request(url: string, body: any, method: string): Observable<any> {
    if (body) {
      return this.http[method](url, body);
    } else {
      return this.http[method](url);
    }
  }

}
