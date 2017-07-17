import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserEditComponent } from './users/user-detail/user-edit/user-edit.component';
import { UserManageSubComponent } from './users/user-detail/user-edit/user-manage-sub/user-manage-sub.component';
import { RafflesComponent } from './raffles/raffles.component';
import { RaffleItemComponent } from './raffles/raffle-list/raffle-item/raffle-item.component';
import { RaffleListComponent } from './raffles/raffle-list/raffle-list.component';
import { RaffleDetailComponent } from './raffles/raffle-detail/raffle-detail.component';
import { AddAddressComponent } from './sign-up/add-address/add-address.component'

import { AppRoutingModule } from './app-routing/app-routing.module';
import { FeaturedTreasureComponent } from './raffles/raffle-list/raffle-item/featured-treasure/featured-treasure.component';
import { ManageSubscriptionComponent } from './users/manage-subscription/manage-subscription.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignUpComponent,
    UsersComponent,
    UserDetailComponent,
    UserEditComponent,
    UserManageSubComponent,
    RafflesComponent,
    RaffleItemComponent,
    RaffleListComponent,
    RaffleDetailComponent,
    AddAddressComponent,
    FeaturedTreasureComponent,
    ManageSubscriptionComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
