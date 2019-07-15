import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Contact } from './contact';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: Http) { }

  getContacts() {
    return this.http.get('https://powerful-basin-50022.herokuapp.com/api/contacts').pipe(map(res => res.json()));
  }

  addContact(newContact){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://powerful-basin-50022.herokuapp.com/api/contact', newContact, {headers: headers})
      .pipe(map(res => res.json()));
  }

  deleteContact(id) {
    return this.http.delete('https://powerful-basin-50022.herokuapp.com/api/contacts/' + id).pipe(map(res => res.json()));
  }

  pgNumber = 1;

  getTestContacts() {

    if (this.pgNumber < 5) {
      var arr = this.http.get('https://reqres.in/api/users?page=' + this.pgNumber).pipe(map(res => res.json()));
      this.pgNumber++;
      return arr;
    } 
    
  }

}
