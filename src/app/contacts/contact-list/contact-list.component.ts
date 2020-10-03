import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  //list of all contacts
  contacts: Contact[] = [
    new Contact("1", "R. Kent Hackson", "jacksonk@byuiedu", "208-496-3771", "https://web.byui.edu/Directory/Employee/jacksonk.jpg", null),
    new Contact("2","Rex Barzee", "barzeer@byui.edu", "208-496-3768", "https://web.byui.edu/Directory/Employee/barzeer.jpg", null)
  ]

  //Event emitter to pass the data to contact-detail
  @Output() selectedContactEvent = new EventEmitter<Contact>();

  onSelected(contact: Contact) {
    this.selectedContactEvent.emit(contact);
  }

  constructor() { }

  ngOnInit(): void {
    // this.firstName = "Riley preator";
  }

}
