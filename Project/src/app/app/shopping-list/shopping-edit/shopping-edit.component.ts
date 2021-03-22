import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.modal';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput',{static:false}) nameInput:ElementRef;
  @ViewChild('amountInput',{static:false}) amountInput:ElementRef;

  @Output() addIngredientEvent = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(){
    console.log(this.nameInput,this.amountInput);
    const ingName= this.nameInput.nativeElement.value;
    const ingAmount= this.amountInput.nativeElement.value;
    this.addIngredientEvent.emit(
      new Ingredient(ingName,ingAmount)
    );
  }

}
