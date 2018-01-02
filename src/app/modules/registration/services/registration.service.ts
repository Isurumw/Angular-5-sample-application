import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Note } from '../../../models';
import { RegistrationConfig } from './../registration.config';
import { HttpService } from '../../../shard';

@Injectable()
export class RegistrationService {

  constructor(private httpService: HttpService) { }

  fetchNotes(): Observable<Note[]> {
    return this.httpService.request(RegistrationConfig.NOTE, null, RegistrationConfig.GET);
  }

}
