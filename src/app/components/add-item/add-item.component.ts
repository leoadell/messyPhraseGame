import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../../services/Item.service';
import { ItemInterface } from '../../models/itemInterface';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item: ItemInterface = {
    description: '',
    phrase: '',
    shuffle: '',
    date: ''
  };

  @Input() itemValue: ItemInterface;

  constructor(private ItemService: ItemService) { }

  ngOnInit() {
    if (this.itemValue){
      this.item=this.itemValue;
    }
  }

  onGuardarItem(myForm: NgForm) {
    if (myForm.valid === true) {
      const fechaNow = Date.now();
      this.item.date = fechaNow;
      this.ItemService.addItem(this.item);
      myForm.resetForm();
    } else {
      console.log('Something went wrong');
    }

  }

  shufflePhrase(event, item: ItemInterface) {
    let upperPhrase = item.phrase.toUpperCase();
    item.shuffle = upperPhrase;
    let shuffledPhrase = [];
    let phraseArray = upperPhrase.split(' ');
    for (let i = 0; i < phraseArray.length; i++) {
      shuffledPhrase[i] = this.shuffleWord(phraseArray[i]);
    }
    item.shuffle = shuffledPhrase.join(' ');
  }

  shuffleWord(word) {
    let suffledWord = '';
    word = word.split('');
    while (word.length > 0) {
      suffledWord += word.splice(word.length * Math.random() << 0, 1);
    }
    return suffledWord;
  }
}
