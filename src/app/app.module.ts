import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VerticalListComponent } from './vertical-list/vertical-list.component';
import { WidgetComponent } from './widget/widget.component';
import { DropdownListComponent } from './dropdown-list/dropdown-list.component';


@NgModule({
  declarations: [
    AppComponent,
    VerticalListComponent,
    WidgetComponent,
    DropdownListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
