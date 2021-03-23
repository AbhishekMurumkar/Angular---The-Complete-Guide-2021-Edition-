import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[appCustomDirective]' // the [] is used to recognize the directive without using [] on attributes of HTML elements
})
export class CustomDirective implements OnInit{
    /**
     * Here we are building a custom directive
     * which will turn the background of html element when hovered
     * for that purpose we need the html element first == Reference of the HTML Elements via services
     * for which we are mentioning the same in constructor
     */
    constructor(private elementRef:ElementRef){
        // we are adding private because the parameter will takens and made a property of class even though we didnt declare
        //this is accessible any where in class
        
    }

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor='green';
    }

}