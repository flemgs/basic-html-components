import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VerticalListComponent, PopUpComponent } from './vertical-list/vertical-list.component';
import { WidgetComponent } from './widget/widget.component';
import { DropdownListComponent } from './dropdown-list/dropdown-list.component';
import { OverlayModule } from '@angular/cdk/overlay';


@NgModule({
  declarations: [
    AppComponent,
    VerticalListComponent,
    WidgetComponent,
    DropdownListComponent,
    PopUpComponent
  ],
  entryComponents: [
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
