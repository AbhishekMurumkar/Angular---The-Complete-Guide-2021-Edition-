# How Angular App gets Loaded and started

1. in development of project, when you run ```ng serve``` index.html present at root location of your project is served (only once)
2. in index.html you can see ```<app-root>..</app-root>``` html tag, in reality it is angular component but not a html tag
3. this component is being created for us by angular cli
4. Thus to load an app-root component angular will consume the files present in the folder src > app > app.component.*
---
## How angular modifies content in index.html after it already loaded
---
1. in page source of index.html in browser, you can see many js files being injected at the end
2. so whenver you edit any component file ng-serve commands will reload angular application with latest changes. This is done by javascript bundlers.
3. thus the above imports contain our code too.
4. In Angular, main.ts (present in src location of project)is ran first in project
5. where in main.ts

    ```javascript
    platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
    ```
    1.  bootStrapModule() - starts up angular with a module
    2.  AppModule - this indicates the app component(src > app > app.module.ts) of angular project
6. In app.module.ts file, you can see

    ```typescript
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { AppComponent } from './app.component';
    import { FormsModule } from '@angular/forms';
    @NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent] //this is array
    })
    export class AppModule { }
    ```

    1. you can see we have another bootstrap property in @NgModule, which is taking an component name as value (in our case AppComponent )
    2. AppComponent is nothing but the file content present app > app.component.ts file

7. In app.component.ts file, we have

    ```typescript
    @Component({
    selector: 'app-root', 
    /*
     1. this is same as <app-root> tag present in index.html file
     2. angular above text as input and looks for the same named tag in index.html or any html and then loads the component content into the view
    */
    templateUrl: './app.component.html',
    /* 
    if you want to display html content without above html, you can use **_template_** property to declare all the html content.
    example : 
        template: [`
            <app-server><app-server>
        `]
    */
    styleUrls: ['./app.component.css']
    // if you want use styles without a file like above, you can use  **_styles:[]_** property
    })
    ```

    1. the selector is used to tell angular when and where to load current component
    2. when angular get request to load a compnent via selector tag (in our case when browser tries to load ```<app-root>..</app-root>```)
    3. Angular loads view from the compiled content obtained from app.component.html 

1. thus from point 5, when main.ts loads it loads AppModule -> which inturn loads AppComponent and this waits for ```<app-root>``` to appear in browser
2. when it is seen in browser, then component's content is injected at that place of html at runtime
---
# [Components](#Components)
* App Component is the root of all components
* we can have multiple and nested components in our project
* each component has its own html, application logic and styles
* this allows us to disintegrate/divide complex business logic into smaller parts which are re-usable in nature
* ### Creating new Component
    1. create a new folder as 'server' in src > app folder / via cmd *```ng generate component component_name```*

    2. create server.component.ts and server.component.html empty files in above folder
    3. In order to create a component, we must register / let angular know that is a component.
    4. this is done ```@Component``` directive (**_All Decorators are started with @ and followed by name_**)
        * which is just a typescript class which take some meta-information from comonent.ts file
        * these classes are understandle to angular
        * this class helps to instantiate / create new objects as Component
    5. Hence import it server.component.ts file as <br>```import { Component } from "@angular/core";```.
    6. add following snippet
        ```typescript
        @Component({// the content between {} is served as meta data of component
            selector:"app-server", // this the html tag anguler looks for in html file
            templateUrl : "server.component.html", //path of html file of resp componet            
        })// this will tell angular that this file tries to instantiate an Component object
        ```
---
* ### Registering Above Component in Root Module of Application(i.e, AppModule)

    1. we need to register above component in root module whenever you create new components, so that when angular starts up

       1. it will check all the components present in ```declarations``` key in app.module.ts
       2. it check meta data of each component from above
       3. then loads the components at run time whenever a selecor tag is seen in the html

    2. For Registering,
       1. Import Above component into AppModule via : <br>```import {ServerComponent} from "./app/server/server.component.ts"```
       2. then keep the component name in declarations array of ```@NgModule```
---
* ### AppModule Responsibilities
    Thus from above content we can conclude that on angular project start up
    * It lists all the components present in the projects

    * it bundles up all components which makes code be split into small parts
    * This is a empty typescript class which converted to angular module via appending meta data in ```NgModule``` decorator in class
    * ### *In NgModule Decorator* : we have following properties
        ---
      * *declarations* :  By default angular will not scan all of your files/components in your project. So you always need to declare newly created components in this property

      * *imports* : whenever you need built in angular/npm modules you have to declare them here.
      * *providers* : 
      * *bootstrap* : tells angular which component to be loaded on angular project starts up
---
* ### Selectors' Types (Psudo Selectors) in Component
  * There are other way to load a component as well.
  
  * Via html tag:<hr>
    * In ```@Component``` set ```selector: 'app-root' ```
    * In html file, you can load component as ```<app-root></app-root>```

  * via html property:<hr>
    * In ```@Component``` set ```selector:[app-root]```
    * In html file, you can use as ```<div app-root>...</div>```

  * Via Class selector:<hr>
    * In ```@Component``` set ``` selector:'.app-root' ```
    * In html file, you can load it as ```<div class="app-root">...</div>```
---
# [Databinding in Angular](AngularDatabinding)

* Databiding is nothing much about communication in your code.
* It is used to transpost data to and fro from typescript/business logic and view/html
* ## Types of Interpolation
    
    1. String Interpolation: display variable value in html, which is present in component.ts file. we {{variable_name}} following notation for string interpolation
   
    2. Property Binding: set the html properties according to value present in business logic/typescript and 
   
    3. Event databinding: this is used to pass the event from the html to typescript

    4. 2 Way Databinding: this is combination of event and property binding,i.e : the data is passed to and fro typescript and html
---
# [Directives](#Directives)

* Instructions given to dom
* Components are example for directives, which instructs angular to load a paticular html view when we see a selector of a component (hence component are directives with a template)
* **_This is the best way of accessing and manipulating the DOM content_**

* ## Built In Directives
  * ## ngIf
    * this is a structural directive which means it manipulates DOM in run time, thats why we always need to use it as ```*ngIf='expression'```. This directive when expression is false will never create the dom element(note the element is not hidden as you think).
  * ## ngIf with else condition : 
    * in order to have a else part in the logical If directive you need use a **_Local Reference Variable_**
        ```html
        <p *ngIf='condition; else localVar'>..</p>
        <ng-template #localVar> 
            <!-- ng -template is built in component in angular to load dynamic component without declaration which takes local variable with #-->
            <p>someout output in view</p>
        </ng-template>
        ```
  * ## ngStyle : 
    * this is used to not only style the component but also style them with some logical expression

        In html:
        ```html
        <p [ngStyle]='{ backgroundColor: getColor() }'>..</p>
        ```
        In typescript:
        ```typescript
        getColor(){
            return expression?'green':'red'
        }
        ```
  * ## ngClass :
    * Append classes dynamically

        In html:
        ```html
        <p [ngClass]='{ classname: expression }'>..</p>
        <!-- example -->
        <p [ngClass]='{ online: this.currentStatus=="online" }'>
        ```

  * ## ngFor :
    * Append classes dynamically

        In html:
        ```html
        <p *ngFor='let i in array; let i=index'>..</p>
        ```