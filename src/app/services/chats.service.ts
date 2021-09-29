import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor(private angularFirestore: AngularFirestore) { }

  getChatRooms(){
    return this.angularFirestore.collection('chatRooms').snapshotChanges();
  }
}
