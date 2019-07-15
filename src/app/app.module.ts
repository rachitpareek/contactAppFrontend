import { HttpModule } from '@angular/http';
import { ContactService } from './contact.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule } from '@angular/forms';
import { TestcontactsComponent } from './testcontacts/testcontacts.component'

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    TestcontactsComponent
  ],
  imports: [
    BrowserModule, 
    HttpModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
