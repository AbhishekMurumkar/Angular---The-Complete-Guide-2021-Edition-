import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appBetterCustomDirective]'
})
export class BetterCustomDirectiveDirective implements OnInit {

  @Input() defaultColor:string;
  @Input() highlightColor:string;

  @HostBinding('style.backgroundColor') backgroundColor:string;

  @HostListener('mouseenter')
  mouseHovered(eventData:Event){
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,'backgroundColor','red'
    // )
    this.backgroundColor='red';
  }
  @HostListener('mouseleave')
  mouseHoveredLeft(eventData:Event){
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,'backgroundColor','transparent'
    // )
    // this.backgroundColor='black';
    console.log(this.defaultColor,this.highlightColor);
    this.backgroundColor = this.defaultColor;
  }

  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }
  ngOnInit(){
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,'backgroundColor','blue'
    // )
    this.backgroundColor='blue';
  }
}
