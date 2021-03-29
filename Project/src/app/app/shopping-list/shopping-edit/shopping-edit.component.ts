import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingServiceService } from '../../myservices/shopping-service.service';
import { Ingredient } from '../../shared/ingredients.modal';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput',{static:false}) nameInput:ElementRef;
  @ViewChild('amountInput',{static:false}) amountInput:ElementRef;
  activeIngredient:Ingredient;
  subscriber:Subscription;
  constructor(private ss:ShoppingServiceService) { }

  ngOnInit(): void {

  }

  addIngredient(){
    console.log(this.nameInput,this.amountInput);
    const ingName= this.nameInput.nativeElement.value;
    const ingAmount= this.amountInput.nativeElement.value;
    const newIng = new Ingredient(ingName,ingAmount);
    this.ss.addIngredient(newIng)
  }

}
