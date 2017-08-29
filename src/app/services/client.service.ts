import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';

@Injectable()
export class ClientService {
  clients: FirebaseListObservable<any[]>;
  client: FirebaseObjectObservable<any>;

  constructor(public af: AngularFireDatabase) { 
    const result = this.af.list('/clients');
    this.clients = result as FirebaseListObservable<Client[]>;
  }

  getClients() {
    return this.clients;
  }

  newClient(client:Client) {
    this.clients.push(client);
  }

  getClient(id:string) {
    this.client = this.af.object('/clients/' + id) as FirebaseObjectObservable<Client>;
    return this.client;
  }

}
