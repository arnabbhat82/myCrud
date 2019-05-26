import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
// import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fruits: string[];
  myForm: FormGroup;
  fruitIndex: number;
  // fruits: string[];
  // signupForm: FormGroup;
  // editFruitIndex: number;

  constructor() {
    this.fruits = ['Apple','Mango','Papaya','orange'];
    this.myForm = new FormGroup({
      fruitItem: new FormControl(null)

    });
    this.fruitIndex = -1;
    // this.fruits = ['Oranges', 'Apples', 'kiwi', 'banana'];
    // this.signupForm = new FormGroup({
    //   fruitItem: new FormControl(null)
    // });
    // this.editFruitIndex = -1;
  }

 get fruitItem(){
    return this.myForm.get('fruitItem');
  }
  onSubmit(){
    if(this.fruitIndex === -1){
      this.fruits.push(this.fruitItem.value);
    } else{
      this.fruits[this.fruitIndex] = this.fruitItem.value;
    }

  }

  // get fruitItem() {
  //   return this.signupForm.get('fruitItem');
  // }
  deleteFruitName(i: number){
    this.fruits.splice(i,1);
  }
  // onSubmit() {
  //   if (this.editFruitIndex === -1) {
  //     // add (push adds new element to the end of the array)
  //     this.fruits.push(this.fruitItem.value);
  //   } else {
  //     // update
  //     // this.fruits.(this.fruitItem.value);
  //     this.fruits[this.editFruitIndex] = this.fruitItem.value;
  //   }
  // }
  editFruitName(i: number){
    this.fruitIndex = i;
    this.fruitItem.setValue(this.fruits[i]);
  }

    // editFruitName(i: number) {
  //   // console.log(this.fruits[i]);
  //   //  return this.editfruitItemName = this.fruits[i];
  //   this.editFruitIndex = i;
  //   this.fruitItem.setValue(this.fruits[i]);
  // }
}
