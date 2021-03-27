import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{

    showDropdown :boolean = false;
    constructor(private elementRef:ElementRef,private render2:Renderer2){}
    @HostListener('click') toggle(){
        this.showDropdown = !this.showDropdown;
        const dropdownMenu = this.elementRef.nativeElement.nextSibling;
        // console.log(dropdownMenu);
        if(this.showDropdown){
            this.render2.addClass(dropdownMenu,'show')
        }else{
            this.render2.removeClass(dropdownMenu,'show');
        }
    }
}