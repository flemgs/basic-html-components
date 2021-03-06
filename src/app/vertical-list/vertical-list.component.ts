import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { GlobalPositionStrategy } from '@angular/cdk/overlay/typings/position/global-position-strategy';
import { ConnectedPositionStrategy } from '@angular/cdk/overlay/typings/position/connected-position-strategy';
import { FlexibleConnectedPositionStrategy } from '@angular/cdk/overlay/typings/position/flexible-connected-position-strategy';
import { OverlayRef } from '@angular/cdk/overlay/typings/overlay-ref';

@Component({
  selector: 'pop-up',
  template: 
  `<div>
    <span *ngFor="let item of items">{{item}}</span>
  </div>`,
  styles: [
    `
    div {
      display: flex;
      font-size: 35px;
    }
    `
  ]
})
export class PopUpComponent {

  items = ['Home', 'News', 'Contact', 'About', 'Support', 'Blog', 'Base', 'Custom', 'More', 'Logo', 'Friends'];
}

@Component({
  selector: 'vertical-list',
  templateUrl: './vertical-list.component.html',
  styleUrls: ['./vertical-list.component.less']
})
export class VerticalListComponent implements OnInit {

  overlayRef: OverlayRef;

  @ViewChild("list") listRef: ElementRef;

  items = ['Home', 'News', 'Contact', 'About', 'Support', 'Blog', 'Base', 'Custom', 'More', 'Logo', 'Friends'];

  constructor(private overlay: Overlay) {
    // const posStrategy = new ConnectedPositionStrategy(this.listRef);
    
   }

  ngOnInit() {
  }

  onClick() {
    const posStrategy = this.overlay.position().flexibleConnectedTo(this.listRef).withPositions([{
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'top'
    }]).setOrigin(this.listRef);
    const overlayConfig = new OverlayConfig({
      // hasBackdrop: config.hasBackdrop,
      // scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy: posStrategy,
    
    });
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    } else {
      this.overlayRef = this.overlay.create(overlayConfig);
      const userProfilePortal = new ComponentPortal(PopUpComponent);
      this.overlayRef.attach(userProfilePortal);
    }
  }
  
}
