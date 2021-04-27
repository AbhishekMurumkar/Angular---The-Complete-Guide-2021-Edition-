import { NgModule } from "@angular/core";
import {Router, RouterModule, Routes} from "@angular/router";

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { Page404Component } from './page404/page404.component';
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate.service";

const appRoutes:Routes=[

  {
    path:"users", component:UsersComponent,
    children:[
      {
        path:":id/:name",
        component:UserComponent
      }
    ]
  },
  {
    path:"servers", 
    component:ServersComponent,
    // canActivate:[AuthGuard],
    canActivateChild:[AuthGuard],
    children:[
      {
        path:":id",
        component:ServerComponent
      },
      {
        path:":id/edit",
        component:EditServerComponent,
        canDeactivate:[CanDeactivateGuard]
      }
    ]
  },
  {
    path:"home", //this will be loaded by default since path is empty
    component:HomeComponent
  },
  {
    path:"",
    redirectTo:"home",
    pathMatch:"full"
  },
  {
    path:"**", //wild card route
    component:Page404Component
  }
];
@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[
    RouterModule
  ]// from this module 
})
export class AppRoutes{

}