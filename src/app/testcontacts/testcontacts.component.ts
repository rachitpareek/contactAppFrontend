import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ContactService } from './../contact.service';
import { TestContact } from '../testContact';

@Component({
  selector: 'app-testcontacts',
  templateUrl: './testcontacts.component.html',
  styleUrls: ['./testcontacts.component.css']
})
export class TestcontactsComponent implements OnInit {

  contacts: TestContact[] = [];

  callNumber = 1;

  update () {
    if (this.callNumber < 5) {
      this.contactService.getTestContacts().subscribe( contactlist => contactlist.data.forEach(element => this.contacts.push(element)));
      this.callNumber++;
    } else {
      this.callNumber = 0;
    }
    }

  constructor(private contactService: ContactService) { }

  ngOnInit() { }

}
