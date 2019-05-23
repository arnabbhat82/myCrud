import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fruits = ['Oranges', 'Apples', 'kiwi', 'banana'];

  deleteItem(i: number) {
    this.fruits.splice(i, 1);
  }
}
