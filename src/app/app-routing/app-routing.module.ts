import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { UsersComponent } from '../users/users.component';
import { UserEditComponent } from '../users/user-detail/user-edit/user-edit.component';
import { UserManageSubComponent } from '../users/user-detail/user-edit/user-manage-sub/user-manage-sub.component';
import { RafflesComponent } from '../raffles/raffles.component';
import { RaffleItemComponent } from '../raffles/raffle-list/raffle-item/raffle-item.component';
import { AddAddressComponent } from '../sign-up/add-address/add-address.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent, children: [
    { path: 'add-address', component: AddAddressComponent }
  ]},
  { path: 'users', component: UsersComponent, children: [
    { path: 'edit', component: UserEditComponent, children: [
      { path: 'manage-subscription', component: UserManageSubComponent }
    ]},
  ]},
  { path: 'treasures', component: RafflesComponent, children: [
    { path: ':id', component: RaffleItemComponent}
  ]}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
