import { EventEmitter, Injectable } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS} from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  documents: Document [];

  constructor() {
    this.documents = MOCKDOCUMENTS;
   }

  //gets all of the documents
  getDocuments() {
    return this.documents.slice();
  }

  //gets a document by the id of it
  getDocument(id: string) {
    for (let document of this.documents) {
      if (document.id == id) {
        return document;
      }
    }
  }

  documentSelectedEvent = new EventEmitter<Document>();
}
