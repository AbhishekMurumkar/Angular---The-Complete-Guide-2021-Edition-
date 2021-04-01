# Routing In Angular

# Never Let user to click ```<a>``` html tag related to your component as this will load entire application

## Background :
In [project](../routing-start/src/app), we have to implement sections as following
* Home
* Servers
    * View and Edit Servers
    * A Service is used to load and update Servers
* Users
    * View Users

## Process of implementing routes

1. should always be registered in AppModule.
2. In Ngmodule of above file, import ```Routes``` from ```@angular/router```
3. Telling what to load

    1. now declare any variable where we declare all the routes. Example : in [file](../routing-start/src/app/app.module.ts). See code:

        ``` javascript
        const appRoutes=[
            {
                path:"users", // this url pattern is loaded into angular app and shown in browser as well. This is called as view of path
                component:UserComponent // upon url loaded this will load respective component. This is called as action of path
            },
            ..
            ..
        ]
        ```
        In above code, value present in "path" keyword will be loaded whenever we want to load other pages

    2. Now lets register our variable containing the routes into angular Module. this is done by
        * ```RouterModule```(located in ```@angular/router```) in ```imports``` array of ```NgModule```
        * then for above Module call ```forRoot``` function taking our variable as paramter. Ex: [file](../routing-start/src/app/app.module.ts).
            ```typescript
            const appRoutes=[....];
            NgModule({
                imports:[
                    ..,
                    ..,
                    ..,
                    RouterModule.forRoot(appRoutes)
                ]
            })
            ```
        * this will load the custom routing of ours into angular app

2. Telling Angular where to load,
    1. In App.component.html, remove all the other component's html tags
    1. Now Add ```<router-outlet></router-outlet>``` tag in above file, to load the components view here
    1. ## Router-outlet is still a directive

## Navigation with Router Links

1. thus when you add routes in ```<a>``` tag of html, it will reload all of angular application, as it will send a new request to server
1. In order to prevent this, just remove ```href``` attribute from tag and add **special direcive** called as ```routerLink``` with url path.
1. ### Note : In router link,if you dont give the path starting with '/' then it will take relative path, else it will take absolute path.
1. now when you change the routes you need to apply/change some stylings as well, for this purpose we append the class on router Link tag via ```routerLinkActive``` directive
1. even though you use above directive the empty path element will always be active, since routerLink checks if a part url exists in current url (where empty path will always be there)
1. To avoid such situations, add a new directive to existing routerlink called as ```[routerLinkActiveOptions]="{exact:true}"``` which makes routerLink directive to check complete url

# Navigating Programmatically

1. import ```Router``` into your component from ```@angular/router``` and inject it into your component constructor (declare a parameter of type Router) 

    ```typescript
    constructor(private router:Router){}
    ```

2. now whenever you want to navigate to any page from code, just use following ```this.routes.navigate(['routeLink'])```