Note: for this module downloaded new project named 'cmp-databinding.zip' and running it.

## Spliting Apps into components

this not only involves splitting of code in html but the passing of parameters/variables present from child to parent or parent to child or among child components
<br>
<br>

## Note:
Property and event binding are not only used on html native elements but also can be used on directives and components,i.e you can emit your own events in the directives and components. This is called as **_Custom Property or Event Binding_**

---
---
### Sending the data from parent to child via properties and @Input Directive

In parent,

```html
<div class="col-xs-12">
  <app-server-elemtent
    *ngFor="let i of serverElements"
    [element]="i"
  ></app-server-elemtent>
</div>
```

In child > child.component.ts

```typescript
export class ChildComponent{
    @Input()  element:{ //declaring element structure in child component
    type:string;
    name:string;
    content:string;
  };
```

## Note :

By default all the properties of components are accessible within the component only, even though you declare them as public. For our case, we need to mention to allow such use-case. This is why we use decorator called as **_@Input_**. This allows the property to expose to other component.

---
---
### Fetching Event from child to parent component via event binding and @Output Directive

Throw a event from child to parent
1. In child, first we need to make sure to throw an event to parent with necessary data in event
> In ts file
 ```typescript
 import {EventEmitter, Output} from '@angular/core';
 
 export class ChildComponent{

@output event_name = new EventEmitter<typedefinition>(); //creating event object with necessary type-definition/structure of data to be emitted

  onEventCall(){
    this.event_name.emit({..data});//this will throw an event whenever user clicks on this button
  }
}
```
> in html file
```html
 <button (click)="onEventCall()">Call here</button>
```

2. Then In parent you first need to mention angular that you will be expecting events from child html element via event biding
> In html file
  ```html
   <app-child (event_name)="onCalledEvent($event)">
   ```
> In typescript file
```typescript
export class ParentComponent{

  onCalledEvent(data:{..data}){
    // process the data here
  }
}
```      
Note: In EventEmitter of angular emits events with one parameter only

---
<br>
---

# View EncapSulation(#ve)

* styles declared in component will be valid up to component itself, they are not transferred to traversed to other and child components
* this is called as shadow dom for each component,
* we can override encapsulation via ViewEncapsulation Module from @angular/core.
  There are 3 types of ViewEncapsulation modes which will decide the component to change the above nature..
  1. ShadowDOM - The component's styles are included within the shadow DOM.
  2. Emulated - (this is used by default) CSS is present/allowed/used as per component
  3. None - Angular adds the CSS to the global styles. The scoping rules, isolations, and protections discussed earlier don't apply.
* How to change the encapsulation mode
In component ts file,
```typescript
import {Component,ViewEncapsulation} from '@angular/core';
@Component({
  selector:'..';
  template:'..';
  encapsulation: ViewEncapsulation.mode
  /*
    where mode can be either None / Encapsulated(default) / ShadowDom
  */
});
```