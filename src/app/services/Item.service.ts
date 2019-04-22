import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ItemInterface } from '../models/itemInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  ItemsCollection: AngularFirestoreCollection<ItemInterface>;
  Items: Observable<ItemInterface[]>;
  ItemDoc: AngularFirestoreDocument<ItemInterface>;


  constructor(public afs: AngularFirestore) {
    // this.Items = afs.collection('Items').valueChanges();
    this.ItemsCollection = afs.collection<ItemInterface>('Items', ref => ref.orderBy('date', 'desc'));
    this.Items = this.ItemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ItemInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }


  getItems() {
    return this.Items;
  }
  addItem(Item: ItemInterface) {
    console.log('NEW PHRASE');
    this.ItemsCollection.add(Item);
  }
  deleteItem(Item: ItemInterface) {
    this.ItemDoc = this.afs.doc(`Items/${Item.id}`);
    this.ItemDoc.delete();
  }
  updateItem(Item: ItemInterface) {
    this.ItemDoc = this.afs.doc(`Items/${Item.id}`);
    this.ItemDoc.update(Item);
  }

}
