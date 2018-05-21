import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vertical-list',
  templateUrl: './vertical-list.component.html',
  styleUrls: ['./vertical-list.component.less']
})
export class VerticalListComponent implements OnInit {

  items = ['Home', 'News', 'Contact', 'About', 'Support', 'Blog', 'Base', 'Custom', 'More', 'Logo', 'Friends'];

  constructor() { }

  ngOnInit() {
  }

  
}
