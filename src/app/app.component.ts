import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  fruits = ['Oranges', 'Apples', 'kiwi', 'banana'];
  signupForm: FormGroup;

 deleteItem(i: number){
   this.fruits.splice(i,1);
 }
 
 ngOnInit(){
   this.signupForm = new FormGroup({
     'fruitItem': new FormControl(null)
   });
 }
 onSubmit(){
  console.log(this.signupForm.value);
}
}