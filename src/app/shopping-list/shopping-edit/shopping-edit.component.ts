import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput')   nameInputRef:ElementRef
  @ViewChild('amountInput')   amountInputRef:ElementRef
  @Output() ingredientAdded = new EventEmitter<{name:String,amount:Number}>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){

    const ingredient =  new Ingredient(this.nameInputRef.nativeElement.value,this.amountInputRef.nativeElement.value);
    
    this.ingredientAdded.emit(ingredient);
    

  }

}
