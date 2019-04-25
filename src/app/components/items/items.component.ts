import { Component, OnInit } from '@angular/core';
import { ItemInterface } from '../../models/itemInterface';
import { ItemService } from '../../services/Item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: ItemInterface[];
  editState: boolean = false;
  itemToEdit: ItemInterface;
    
  constructor(private itemService: ItemService) { }
  
  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
  }
  editItem(event, item: ItemInterface) {
    this.editState = true;
    this.itemToEdit = item;
  }
  onUdpdateItem(item: ItemInterface) {
    this.itemService.updateItem(item);
    this.clearState();
  }
  deleteItem(event, item: ItemInterface) {
    this.itemService.deleteItem(item);
    this.clearState();
  }
  clearState() {
    this.editState = false;
    this.itemToEdit = null;
  }

}
