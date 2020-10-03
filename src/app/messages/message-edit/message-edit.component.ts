import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {

  @ViewChild('subject') subject: ElementRef;
  @ViewChild('msgText') msgText: ElementRef;

  @Output() addMessageEvent = new EventEmitter<Message>();

  currentSender = "Riley Preator";

  constructor() { }

  ngOnInit(): void {
  }

  onSendMessage() {
    const subjectValue = this.subject.nativeElement.value;
    const msgTextValue = this.msgText.nativeElement.value;
    let newMessage = new Message("1", subjectValue, msgTextValue, this.currentSender);

    this.addMessageEvent.emit(newMessage);
    this.onClear();
  }

  onClear() {
    this.subject.nativeElement.value = "";
    this.msgText.nativeElement.value = "";
  }
}
