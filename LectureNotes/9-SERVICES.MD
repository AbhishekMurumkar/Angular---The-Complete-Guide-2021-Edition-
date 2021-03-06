# DEPENDENCY INJECTION: the process of injecting a dependency into a class or component by the framework

# SERVICES
There are cases where we might execute same piece code in different components, thus via services we make those code as centralized system and be used in any component we need.

## Never create the instances of services manually, angular does that for you via dependecny injection

### Steps to inject services into an component via DI

* This is generally made by declaring the service as parameter to constructor of a class along with its type

    ```typescript
    import {LoggingService} from "./logging.service.ts"
    export class MyClass{
        constructor(private logger:LoggingService){
            //logger is created and injecting dynamically into our class by angular when creating the object/component
            // this object is made available all over (still only with in) class
        }
    }
    ```

* Then we need to provide the services access to angular

    ```typescript
    import {Component} from "@angular/core";
    import {LoggingService} from "./logging.service.ts"
    @Component({
        ..,
        ..,
        ..,
        providers: [
            
            // declare all the services that are you need in this component,

            // this when any service gets referenced in component, the original service is loaded from here
        ]
    })
    export class MyClass{
        constructor(private logger:LoggingService){
            
            //logger is created and injecting dynamically into our class by angular when creating the object/component
            
            // this object is made available all over (still only with in) class
        }

        // accessing service directly and from anywhere within component class
        someMethod(){
            this.logger();
        }
        this.logger();
    }
    ```

# Hierarchial Injector

* we receive same instance of injector to child components when we inject a service to a parent component.
* It also depends upon the order of their declarations in constructor
* From Files point of view, we can have
    1. root level   : App Module file , same instance of service available application-wide and also in other services as well.

    2. AppComponent File : Same instance of service is available for all components AND ALSO FOR RELATED CHILDS but not for other services.
    3. Declared in a any child component: same instance of service is available for that and its child components. if we create any instances from above points then they are to be overwrittern here.

* Sometimes we need to access the instance created in parent from child for that purpose, you can simply remove service name from providers array of child component's ```@Component``` object.

# Injecting Services into Another Services.

Sometimes we need use services inside another , for this purpose declare required all of the services in ```providers``` property of injective component, then provide some meta data to distinguish among services just like we do for components (via component directive)

the differentiation is done via ```Injectable``` decorator(present in angular/core). Thus any class having this decorator means
1. this respective class is injectable
2. ## You dont add Injectable to services you want to inject but reciving service, service variant you want to inject into current service.
3. Example In new-app/logger project we have 2 services : logger & accounts, in this case accounts makes use of logger service. So we need to declare Injectable in the Accounts service(receiver) but not in logger (which is to be injected)

# Using Services for CROSS-COMPONENT COMMUNICATION:

this generally including listening to events made in one component into another Example: see files [Account Service]("../new-first-app/src/app/logger/accounts.service.ts) and [typescript file](../new-first-app/src/app/logger/logger-form/logger-form.component.ts)

* In Accounts.service.ts, you can see we create event emitter with name as : statusUpdated
* this event is emitted whenever a status update method is called and executed
* In typescript file, you can see that in ```constructor```, you can see that we are listening the events from above service via ```service-name```.**subscribe()** method
* thus whenever source (in our case account service) emits an event, the listener's (in our case typescript file) subscribe code is executed.
