import { Component, OnInit } from '@angular/core';
import { ItemInterface } from '../../models/itemInterface';
import { ItemService } from '../../services/Item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  Items: ItemInterface[];
  editState: boolean = false;
  ItemToEdit: ItemInterface;
  constructor(private itemServiceVar: ItemService) { }

  ngOnInit() {
    this.itemServiceVar.getItems().subscribe(Items => {
      this.Items = Items;
    });
  }
  editItem(event, Item: ItemInterface) {
    this.editState = true;
    this.ItemToEdit = Item;
  }
  onUdpdateItem(Item: ItemInterface) {
    this.itemServiceVar.updateItem(Item);
    this.clearState();
  }
  deleteItem(event, Item: ItemInterface) {
    this.itemServiceVar.deleteItem(Item);
    this.clearState();
  }
  clearState() {
    this.editState = false;
    this.ItemToEdit = null;
  }

}
