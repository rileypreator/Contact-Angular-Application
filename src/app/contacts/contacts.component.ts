import { Component, OnInit } from '@angular/core';
import { Contact } from './contact.model';
import { ContactService } from './contact.service';

@Component({
  selector: 'cms-contacts',
  // template: `<h2>Heading<h2>`,
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  // styles: [body {text-align: center;}]
})
export class ContactsComponent implements OnInit {
  selectedContact: Contact;
  // name: "Riley Preator";

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.contactSelectedEvent.subscribe(
      (contact: Contact) => {
        this.selectedContact = contact;
      }
    );
  }

}
