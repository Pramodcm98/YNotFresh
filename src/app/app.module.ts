import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { PurchaseComponent } from './purchase/purchase.component';
import { FilterComponent } from './purchase/filter/filter.component';
import { ProductsComponent } from './purchase/products/products.component';
import { CartComponent } from './purchase/cart/cart.component';
import { GroceryComponent } from './purchase/products/grocery/grocery.component';
import { MeatComponent } from './purchase/products/meat/meat.component';
import { FishComponent } from './purchase/products/fish/fish.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './profile/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    //all the custom components
    HomeComponent,
    PurchaseComponent,
    FilterComponent,
    ProductsComponent,
    CartComponent,
    GroceryComponent,
    MeatComponent,
    FishComponent,
    ProfileComponent,
    SignupComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
