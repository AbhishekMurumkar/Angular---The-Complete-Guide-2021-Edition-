import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // this custom directive is to set an example on executing oppostive of ngIf directive
  
  @Input() set appUnless(condition:boolean){
    // this.unless is still a property of a class
    // the set keyword makes a method unless which executes the method
    if(!condition){
      this.vcRef.createEmbeddedView(this.templateRef)
    }else{
      this.vcRef.clear();
    }
  }
  constructor(private templateRef:TemplateRef<any>, private vcRef:ViewContainerRef) { }

}
