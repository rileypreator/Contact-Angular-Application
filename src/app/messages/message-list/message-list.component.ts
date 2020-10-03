import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [
    new Message("1", "This is a subject", "This is a msge", "Riley Preator"),
    new Message("1", "This is a 2nd subject", "This is a 2nd msge", "Tyli Preator"),
    new Message("1", "This is a 3nd subject", "This is a 3nd msge", "Riley Preator"),
  ];
  constructor() { }

  currentMessage = Message;
  ngOnInit(): void {
  }

  onAddMessage(message: Message) {
    this.messages.push(message);
  }


}
