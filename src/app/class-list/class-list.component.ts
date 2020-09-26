import { Component, OnInit } from '@angular/core';
import { ClassListItem } from '../shared/class-list-item.model';

@Component({
  selector: 'cms-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  classList: ClassListItem[] = [
    new ClassListItem("Computer Science Beginnings", 473, "Monday 9:00 AM"),
    new ClassListItem("Advanced Programming", 253, "Tuesday 11:00 AM")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
