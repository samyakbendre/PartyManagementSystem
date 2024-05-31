import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { PartyDetailsFormComponent } from './views/party-details-form/party-details-form.component';
import { PartyDetailsListComponent } from './views/party-details-list/party-details-list.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'login',
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'party-details-form',
    component : PartyDetailsFormComponent,
    canActivate : [AuthGuard]
  },
  {
    path : 'party-details-form/:id',
    component : PartyDetailsFormComponent,
    canActivate : [AuthGuard]
  },
  {
    path : 'party-details-list',
    component : PartyDetailsListComponent,
    canActivate : [AuthGuard]
  },
  {
    path : '**',
    redirectTo : 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
