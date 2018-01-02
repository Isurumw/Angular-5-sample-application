import { Component, OnInit } from '@angular/core';

import { RegistrationService } from '../../services/registration.service';
import { Note } from '../../../../models';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  notes: Note[];

  constructor(private registrationService: RegistrationService) { }

  ngOnInit() {
    this.registrationService.fetchNotes().subscribe(
      notes => {
        this.notes = notes;
        console.log(this.notes);
      }, error => {
        console.log(error);
    });
  }

}
