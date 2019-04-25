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

  public shufflePhrase(event, item: ItemInterface) {
    let upperPhrase = item.phrase.toUpperCase();
    item.shuffle = upperPhrase;
    let shuffledPhrase = [];
    let phraseArray = upperPhrase.split(' ');
    for (let i = 0; i < phraseArray.length; i++) {
      shuffledPhrase[i] = this.shuffleWord(phraseArray[i]);
    }
    item.shuffle = shuffledPhrase.join(' ');
  }

  public shuffleWord(word) {
    let suffledWord = '';
    word = word.split('');
    while (word.length > 0) {
      suffledWord += word.splice(word.length * Math.random() << 0, 1);
    }
    return suffledWord;
  }
}
