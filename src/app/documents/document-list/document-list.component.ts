import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  //list of all documents
  documents: Document[] = [
    new Document("1", "Riley's Document", "My first document", "https://docs.google.com/document/d/1QH7JjKWXuEOJTHXDZIQjDZcQYzg6OLOVF4OeX1CdiO0/edit?usp=sharing", null),
    new Document("1", "Riley Preator", "Test Document", "https://docs.google.com/document/d/1QH7JjKWXuEOJTHXDZIQjDZcQYzg6OLOVF4OeX1CdiO0/edit?usp=sharing", null)
  ]
  constructor() { }

  ngOnInit(): void {
  }

  
  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }

}
