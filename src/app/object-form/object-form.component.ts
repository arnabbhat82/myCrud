import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

interface IObject {
  item1: string;
  item2: string;
  item3: string;
  item4: string;
}

@Component({
  selector: 'app-object-form',
  templateUrl: './object-form.component.html',
  styleUrls: ['./object-form.component.scss']
})
export class ObjectFormComponent implements OnInit {
  objectForm: FormGroup;
  objectArr: IObject[] = [];

  constructor(private fb: FormBuilder) {
    this.objectForm = this.fb.group({
      item1: [''],
      item2: [''],
      item3: [''],
      item4: ['']
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.objectArr.push(this.objectForm.value);
    this.objectForm.reset();
  }
}
