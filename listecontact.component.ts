import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-listecontact',
  templateUrl: './listecontact.component.html',
  styleUrls: ['./listecontact.component.css']
})
export class ListecontactComponent implements OnInit {
  contacts : Contact[]=[];

  constructor(
    private connectionService: ConnectionService
    ) { }

  ngOnInit(): void {
    this.listContacts();
  }
  listContacts() {
    this.connectionService.getContact().subscribe(
      (data) => {
        this.contacts = data;
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}