import { Component, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('dropdownContent') private dropDownContentElt: ElementRef;

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
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    console.log(this.elementRef.nativeElement.getBoundingClientRect(), this.dropDownContentElt.nativeElement.getBoundingClientRect());
    this.dropDownContentElt.nativeElement.style.transform = `translate(${rect.x}px, ${rect.y}px)`;
  }

  onItemClicked() {
    this.hideDropdown = true;
    
  }
}
