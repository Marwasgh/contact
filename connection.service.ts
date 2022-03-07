import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
providedIn: 'root'
})
export class ConnectionService {

  currentContact: Contact[] | undefined;

  apiUrl: string = 'http://localhost:3000/api';
  constructor(private http: HttpClient, private router: Router) { } 

  getContact(): Observable<Contact[]>{
    return this.http.get<Contact[]>(`${this.apiUrl}/con/getContact`);
  }

  contact(newContact: Contact): Observable<any> {
  return this.http.post<Contact>(`${this.apiUrl}/con/sendMessage`, newContact);
}

}