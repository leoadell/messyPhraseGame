import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/Item.service';
import { ItemInterface } from '../../models/itemInterface';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  Item: ItemInterface = {
    description: '',
    phrase: '',
    shuffle: '',
    date: ''
  };
  constructor(private ItemService: ItemService) { }

  ngOnInit() {
  }

  onGuardarItem(myForm: NgForm) {
    if (myForm.valid === true) {
      const fechaNow = Date.now();
      this.Item.date = fechaNow;
      this.ItemService.addItem(this.Item);
      myForm.resetForm();
    } else {
      console.log('Algo va mal');
    }

  }

  shufflePhrase(event, item: ItemInterface){
    console.log(event);
    // let upperPhrase = item.phrase.toUpperCase();
    // item.shuffle=upperPhrase;
  }


}
