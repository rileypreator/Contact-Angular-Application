import { Component, OnInit } from '@angular/core';
import { Contact } from './contact.model';

@Component({
  selector: 'cms-contacts',
  // template: `<h2>Heading<h2>`,
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
  // styles: [body {text-align: center;}]
})
export class ContactsComponent implements OnInit {
  name: "Riley Preator";
  constructor() { }
  selectedContact: Contact;
  ngOnInit(): void {
  }

}
