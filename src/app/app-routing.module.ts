import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './profile/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './profile/signup/signup.component';
import { FishComponent } from './purchase/products/fish/fish.component';
import { GroceryComponent } from './purchase/products/grocery/grocery.component';
import { MeatComponent } from './purchase/products/meat/meat.component';
import { PurchaseComponent } from './purchase/purchase.component';


const routes: Routes = [
  {path:'', pathMatch:"full",redirectTo:"/home"},//base rooting or default rooting or route redirecting

  { path: "home", component: HomeComponent },//home component

  {path:"profile",component:ProfileComponent,//profile component
   children:[                                 //child components of profile component
     {path:'',component:LoginComponent},
     {path:"login",component:LoginComponent},
     {path:"signup",component:SignupComponent}
    ]},

  {path: "purchase", component: PurchaseComponent,//purchase component
    children:[                                    //child components for purchase component
        {path:'',component:GroceryComponent},
        { path: "grocery", component: GroceryComponent },
        { path: "meat", component: MeatComponent },
        { path: "fish", component: FishComponent }
      ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
