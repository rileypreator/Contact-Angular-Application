import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  //list of all contacts
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) { }

  //Event emitter to pass the data to contact-detail is now done in the contact service

  onSelected(contact: Contact) {
    // this.selectedContactEvent.emit(contact);
    this.contactService.contactSelectedEvent.emit(contact);
  }


  ngOnInit(): void {
    // this.firstName = "Riley preator";
    this.contacts = this.contactService.getContacts();
  }

}
