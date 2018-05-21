import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.less']
})
export class DropdownListComponent implements OnInit {

  hideDropdown = true;

  items = ['Home', 'News', 'Contact', 'About', 'Support', 'Blog', 'Base', 'Custom', 'More', 'Logo', 'Friends'];

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event']) clickedOutside($event){
    // here you can hide your menu
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.hideDropdown = true;
    }
  }

  drop() {
    this.hideDropdown = !this.hideDropdown;
  }

  onItemClicked() {
    this.hideDropdown = true;
  }
}
