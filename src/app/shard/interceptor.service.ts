import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header.
    const updatedReq = req.clone({headers: req.headers.set('Content-Type', 'application/json')});
    // Pass on the cloned request instead of the original request.
    return next.handle(updatedReq);
  }

}
