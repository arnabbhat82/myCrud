import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fruits: string[];
  signupForm: FormGroup;

  constructor() {
    this.fruits = ['Oranges', 'Apples', 'kiwi', 'banana'];
    
    this.signupForm = new FormGroup({
      fruitItem: new FormControl(null)
    });
  }

  get fruitItem() {
    return this.signupForm.get('fruitItem');
  }

  onSubmit() {
    console.log(this.fruitItem.value);
    this.fruits.push(this.fruitItem.value);
  }

  deleteItem(i: number) {
    this.fruits.splice(i, 1);
  }
  editFruitName(i: number) {
    // console.log();
    //console.log(this.fruits.valueOf());
    console.log(this.fruits[i]);
    
  }
}
