import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { UsersComponent } from '../users/users.component';
import { UserEditComponent } from '../users/user-detail/user-edit/user-edit.component';
import { UserManageTicketsComponent } from '../users/user-detail/user-manage-tickets/user-manage-tickets.component';
import { RafflesComponent } from '../raffles/raffles.component';
import { RaffleItemComponent } from '../raffles/raffle-list/raffle-item/raffle-item.component';
import { RecipeDetailComponent } from '../raffles/raffle-detail/raffle-detail.component';
import { AddAddressComponent } from '../sign-up/add-address/add-address.component';
import { ManageSubscriptionComponent } from '../users/user-detail/manage-subscription/manage-subscription.component';
import { HowItWorksComponent } from '../how-it-works/how-it-works.component';
import { RulesComponent } from '../rules/rules.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'sign-up', component: SignUpComponent, children: [
    { path: 'add-address', component: AddAddressComponent }
  ]},
  { path: 'users', component: UsersComponent, children: [

    { path: 'manage-tickets', component: UserManageTicketsComponent},
    { path: 'edit', component: UserEditComponent },
    { path: 'manage-subscription', component: ManageSubscriptionComponent },
    { path: '', component: RulesComponent},
    { path: 'treasures/:id', component: RecipeDetailComponent }
  ]},
  { path: 'treasures', component: RafflesComponent, children: [
    { path: ':id', component: RecipeDetailComponent}

  ]}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
