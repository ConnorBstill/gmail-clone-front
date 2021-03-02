import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

import { Email } from '../interfaces/emails.interface';

@Component({
  selector: 'app-view-emails-page',
  templateUrl: './view-emails-page.component.html',
  styleUrls: ['./view-emails-page.component.scss']
})
export class ViewEmailsPageComponent implements OnInit {
  public emails: Email[] = []

  constructor(private readonly rest: RestService) { }

  ngOnInit(): void {
    this.rest.getUserEmails().then(res => {
      this.emails = res.data
      console.log(res)
    });
  }
}
