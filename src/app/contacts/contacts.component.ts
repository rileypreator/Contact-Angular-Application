import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {
  }

}
