# Routing In Angular

# Never Let user to click ```<a>``` html tag related to your component as this will load entire application

## Note: You can find all code implementations [here](../routing-start/src)

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
1. RouterLink always knows your current path, thus if you use any invalid path at any interchild, while loading the path it will throw you an error.
1. ### Note : In router link,if you dont give the path starting with '/' then it will take relative path, else it will take absolute path.
1. now when you change the routes you need to apply/change some stylings as well, for this purpose we append the class on router Link tag via ```routerLinkActive``` directive
1. even though you use above directive the empty path element will always be active, since routerLink checks if a part url exists in current url (where empty path will always be there)
1. To avoid such situations, add a new directive to existing routerlink called as ```[routerLinkActiveOptions]="{exact:true}"``` which makes routerLink directive to check complete url

# Navigating Programmatically via navigate()

1. import ```Router``` into your component from ```@angular/router``` and inject it into your component constructor (declare a parameter of type Router) 

    ```typescript
    constructor(private router:Router){}
    ```

2. now whenever you want to navigate to any page from code, just use following ```this.routes.navigate(['name/link of page'])```
3. the above method navigate() doesn't keep track of your current path.

# Using Relative Paths:

1. In nagivate method, if url is "/servers", then this means it is a absolute path and "servers" means relative path
1. thus when you use relative paths in the navigate method, you need to inform your current path as well for correct working
1. this is done via passing a JSON object in second paramter of navigate method(after declaring your navigation array). ex:
    
    ```typescript
    import {Router,ActivatedRoute} from "@angular/core";
    export class MyComponent{
        constructor(private router:Router,private activeroute:ActivatedRoute)
    }
    this.router.navigate(['route'],{ relativeTo : this.activatedRoute })
    ```
    Here we used the **_ActivatedRoute_**  from **_@angular/route_** library to inject the current path of application dynamically without any human/hard coding it. Angular will tell the application about the information of the current path.

# Passing the Parameters to our Routes:

1. First you need to mention is info in **path** paramter of (check for first path in)[appRoute]("../routing-start/src/app/app.module.ts")
1. you can see that "users/:id" is given, which lets angular to know that we need to pass a url paramter with key "id" to User Component.
1. In above url ("users/:id"), the colon ":" denotes that it is dynamic part of url. If you dont place a colon then it will be treated as nested path

# Getting data from URL Params:

1. Thus inorder to get the URL Params, first you need to get the current URL, this is done via lib "ActivatedRoute"
1. thus to get url params, you need call ```this.activatedRoute.snapshot.params['key name given with ":" in path']```;
1. Note that we are using the snapshot version of URL, this mean when our component is not loaded and is about to, at that the time data is which is present in URL Params will be loaded.
1. thus after loading the component and still being inside in same component, if any one changes the URL Params with new data, then the component will not refresh the data
1. This is because we are still using data from "snapshot" object where now our component is already loaded. hence angular doesn't reinstantiate complete component for sake of URL CHanges
1. thus to get new data follow next title.
1. this snapshot is only used whenever we load a component which cannot be reloaded again.

# Getting data from URL params Reactively:
1. thus for getting the new data after loading a component is called as Reactive Routes.
1. this can be done by listening to changes made on routes, via Routes.params Observable
1. Example : [check ngOnInIt method in here]("../routing-start/src/app/users/user/user.component.ts")
1. this is used whenever there are possibilites of changing data of URL within components,
1. ## Note : whenever you create a subscription your angular will always throw an event for URL change irrespective of the component's presence, Hence for the correct working of app you need to destroy that subscription present in your component in ngDestroy 

# Passing Query Params and Fragments
* this is used with ```routerLink```
* After declaring your entire url with ```routerLink```, you can describe your query params with a new property called as ```queryParams``` and fragments as ```fragment```, Ex:

    ```typescript
    <a 
        [routerLink]="['myRoute',5,'edit']" 
        [queryParams]="{'allowEdit':1}"
        [fragment]=" 'loading' " //the same line can be written as
        framgent="loading"
        ></a>
    ```

* QueryParams as shown above is a bindable property of router links.
* Same goes for fragement as well
* Query Paramas and Fragments can also be added to **router.navigate** function as following

    ```typescript
    this.router.navigate(['/myroute','subroute'],
    {
        queryParams:{"allowEdit":1},
        fragment:"loading"
    })
    ```

# Gettting Query Params and Fragments
* In order to accomplish this, first we need to inject active route into respective component
* There 2 approaches to get the data

1. without subscribe, used for non reactive loading of component, data can be fetched as following

    ```typescript
    // approach 1 without subscribers
    console.log(this.route.snapshot.queryParams, this .route.snapshot.fragment);
    ```

2. with Subscribe, used for reactive loading of component, data can be fetched as following

    ```typescript
    // approach 2 with subscribers
    this.route.queryParams.subscribe();
    this.route.fragment.subscribe();
    ```

## Note: there is no need to use unsubscribe method in approach 2 since angular will take care of it

# Difference between Params and QueryParams in Angular ?

## Setting Child (Nested) Routes:

* you can do this via ```children``` property. Ex [code]("../routing-start/src/app/app.module.ts")
* In general, all the routes are being displayed in angular is ```router-outlet``` hook. Thus ```<router-outlet></router-outlet>``` will load all the paths with out having children property(that is paths present in top most level)
* Thus to load the child routes in a parent component, you need to call hook again in parent to load all the child routes.

## Preserving the queryparams of parent component to child

* Example:

```typescript
this.router.navigate(
    ..route,
    ..,
    queryParamsHandling:"preserve" // this is append the query params when current navigate method is used
)
```

* Values present for the queryParamsHandling :
    1. preserve : previous query params will be used as is.
    2. merged : previous query params will be merged with values with new ones.

## Redirecting and Wildcard Routes : 404 Handling

* redirection can be done via adding property ```redirectTo:'some-path'```
* wild card path can be denoted as ```"**"```
* thus the 404 page can be handled by constructing a path entry in our routes with wild card as path
* ### Always make sure that wildcard path must be the last one in the routes array of your angular application.

##  Important: Redirection Path Matching

By default, Angular matches paths by prefix. That means, that the following route will match both ```/recipes```  and just ```/``` 

```json
{ path: '', redirectTo: '/somewhere-else' }
```

Actually, Angular will give you an error here, because that's a common gotcha: This route will now ALWAYS redirect you! Why?

Since the default matching strategy is "prefix" , Angular checks if the path you entered in the URL does start with the path specified in the route. Of course every path starts with ''  (Important: That's no whitespace, it's simply "nothing").

To fix this behavior, you need to change the matching strategy to "full" :

```json
{ path: '', redirectTo: '/somewhere-else', pathMatch: 'full' }
```

Now, you only get redirected, if the full path is ''  (so only if you got NO other content in your path in this example).

## Outsourcing Routes

* In general we will create a new files to store all the routes of angular application with path as ```app/``` and name as ```app-routing.module.ts```
* In ```app-routing.module.ts``` file, you need to import the RouterModule declared in the component, which is re-used in imports array of NgModule of ```app.module.ts``` file.

## Introduction To Guards

* The Guard is nothing but to load the view only if a given condition is true.
* The guard is code ran before loading of each component where we maintain some checks to decide a component to load or not
* ### Protecting Routes : 
    * Add ```auth-guard.service.ts``` in app/ folder
    * Now in order to create a guard create a class which implements ```CanActivate``` interface
    * This class now must override a method called as ```canActivate```
    * This method receives arguements called as ```ActivatedRouteSnapshot``` and ```RouterStateSnapshot```
    * The above methods returns an output (anyone of the following) to conclude to angular to load an route or not.
        1. Observable<boolean>
        2. Promise<boolean>
        3. boolean
    * Example : [code](../routing-start/src/app/auth-guard.service.ts)
    * The above method can run asynchronously or synchronously
    * Thus to apply the guards on your routes 
        1. go to the routes array of your angular application
        2. declare the property ```canActivate``` with value as the name of the class of the guard file(In our case it is AuthGuard) on all root level routes which you want guard
        3. The canActivate can guard the child routes as well.
        4. Example check AuthGuard (code to build Gaurd) [here](../routing-start/src/app/auth-guard.service.ts) and to implement on routes can be found [here](../routing-start/src/app/app-routing.module.ts) (check servers path in file)
    * Protecting only child Routes and showing only parent component. Replace ```canActivate``` to ```canActivateChild``` in following files
        1. [auth-guard.service.ts](../routing-start/src/app/auth.service.ts)
        2. [property used on routes array](../routing-start/src/app/app-routing.module.ts)

## Controlling Navigation with canDeactivate

* The Above Discusses whether we can enter into a route or not.. This one discusses whether we can leave a route or not.. this is especially seen whenever you want to prevent user going to other routes whenever he fills a form etc.
* The catch of using the canDeactivate is that 

1. first you need to access the code of component to really know that component data was saved or not
2. But Here we need a guard to protect the route if in case the component data was not saved. Thus here we need access the component data in a guard which is basically a service.
3. The catch here is how to get component's data in a service. But we can do so.

Solution For Above Catch

1. create a service.ts file
2. this containes an interface (which can imported), this interface must have empty definition method called as ```canDeactivate```. This method must return Observable<boolean> | Promise<boolean> | boolean (Note this return is same as of canAcitvate Guard as we seen above)
3. Now lets implement above interface with a class (in same file) implementing above interface along ```CanDeactivate``` interface from angular. Example

    ```typescript
    export interface Int1{
        canDeactivate:()=>Observable<boolean> | Promise<boolean> | boolean;// after => indicating return type of function
    }
    export class MyClass implements CanDeactivate<Int1>
    /**
     * CanDeactivate is a Generic Type, hence we are telling angular to convert it to our interface type
     * This tells angular to search for the method we declared in our interface must be overriden in our class
     * This setup now helps us to connect our component data to canDeactivate Guard
     * Angular Router will use overriden canDeactivate method once we try to leave a route
     * Thus canDeactivate method should have component (type as same as Interface), currentRoute/ActivatedRouteSnapshot and RouterStateSnaphot(current and next) as arguements
    */
    {
        canDeactivate(
            comp: Int1,
            currentRoute: ActivatedRouteSnaphost,
            currentState: RouterStateSnapshot,
            nextState  ?: RouterStateSnaphost //this is a optional paramter
        ):Observable<boolean>|Promise<boolean>|boolean //this is the return type of method
        {
            return comp.canDeactivate();// this statement makes Angular Router to call canDeactivate on component.
            // this is why we created interface in first place, as Angular Router can execute canDeactivate in our service
            // and also check component we're currently on has canDeactivate method too.
        }
    }
    ```

4. Now implement canDeactivate on your routes in route array as following ```{path:"some",component:"xxx",canDeactivate:[MyClass]}``` and declare ```MyClass``` from in ```providers``` array of ```app.module.ts``` file
5.  Now MyClass to work and stopping changing the route, the component which you declared ```canDeactivate``` as property on path's array, that component's class should implement our own interface Int1
6. Thus from above step we need to override the method canDeactive in our component.

## Passing Static Data to route when loaded

1. ```{path:"xxx",component:"yyy",data:{"message":"your custom message"}}```
2. Now in component ```yyy```, import ```ActivatedRoute``` as ```constructor(private route:ActivatedRoute){}```
3. then in ```ngOnInit```, you can get data declared as property in path's array from following : ```let msg = this.route.snapshot.data["message"]```
4. Thus for chaging data, you need to subscribe for data in above point 3

    ```typescript
    //replace line 3 from above to below code to get dynamic data
    this.route.snapshot.data.subscribe((data:Data)=>{msg = data['message']});
    ```

Example : 

1. [canDeactiveComponent Code](../routing-start/src/app/servers/edit-server/can-deactivate.service.ts)
2. [CanDeactive as property](../routing-start/src/app/app-routing.module.ts)

## Passing Dynamic Data to route when loaded, with resolve Guard

1. Dynamic data means, data which has to be fetched before a route can be displayed
2. Example, in our case, lets say we have list and types of servers available.. if all those information did contained in the database, then for each click on server's tab, we need to fetch respective server type and their data before loading the individual server tab.
3. In this case, we can directly fetch remote data from ngOnInit and reload the page when we got data. In this case initially the route is displayed in UI with empty data,however when we get data the component is reloaded with data.
4. Alternate is to use Resolve Servive, this service will simply fetch the data which is obtained in future and then loads the component when data is obtained.
5. creating resolver in angular
    1. create a custom service file```ng g s server-resolver```
    2. create a class in it say "MyResolver" which needs to implement interface ```Resolve``` from ```@angular/router```
    3. The Interface is generic type, hence declare data type that your component going to receiver in fetch, in my case it is ```Resolve<{id:number, name:string, status:string}>``` (type of server)
    4. This interface demands us to override method ```resolve``` which takes 2 Params
        4.1 ActivatedRoute
        4.2 RouterStateSnapshot
    5. the above function should return ```Observable<{object type of future data}>|Promise{object type of future data}|{object type of future data}```
    6. this resolver reloads each time when there is a change in component
    7. then declare our resolver service in ```providers``` array of ```app.module.ts``` file.
    8. Now for the route you want to use in routes/path array declare new property ```resolve``` on that route with your service name defined in point 1. 
    ```{path:"xxx",component:"yyy",resolve:{"server":ServerResolverService} }```
    9. Whenever that route is called, angular first resolves the function present in defined resolve service and gets data and stored in "key" of resolve object,i.e: server acting/behaving like a data property on the route.thus it would be like 
    ```{path:"xxx",component:"yyy",data:{"server":{resolved data} }```
    10. Now server is just a custom property defined on a route. You can get this route's component via (In ngOnInit)```this.route.data.subscribe((data:Data)=>{console.log("dynamic data from route:"+data["server"])})```
    then loads component in UI.
    Example [Resolver code](../routing-start/src/app/servers/server/server-resolver.service.ts), [Resolver Implementation in component](../routing-start/src/app/servers/server/server.component.ts)(see ngOnInit function)

## Location Strategies:

Simply put declaring the domain name to use when angular app is deployed. So that routes be loaded properly. This also includes using # urls. By using this type of url you'll inform to server which has hosted your application to only consider route before hash, after hash angular consumes it and loads the page.
ex : http://localhost:4200/#/users
path consumed by server : http://localhost:4200/
path consumed by angular: /users
### thus here for 404 error, index page will be shown
In order to use this you need to configure your RouterModule as following
In ```app-routing.module.ts``` change RouterModule(In NgModule) to ```RouterModule.forRoot(appRoutes,{useHash:true})```

## Wrap UP
Check Routing Implementation in Project App from section : [here](../LectureNotes/3-Intro-To-Project.md#Routes)