import { Component, Directive, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { GpayComponent } from './gpay/gpay.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SbibankComponent } from './sbibank/sbibank.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { SqaureComponent } from './sqaure/sqaure.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent, children:[
    {path:"calculator",component:CalculatorComponent},
    {path:"vehicle",component:VehicleComponent},
    {path:"home",component:HomeComponent},
    {path:"sbibank",component:SbibankComponent},
    {path:"data-binding",component:DataBindingComponent},
    {path:"rectangle",component:RectangleComponent},
    {path:"directives",component:DirectivesComponent},
    {path:"gpay",component:GpayComponent},
    {path:"product",component:ProductComponent},
    {path:"square",component:SqaureComponent}
  ]},
  {path:"login",component:LoginComponent},
  {path:"shopping",component:ShoppingComponent},
  {path:"",component:LoginComponent},
  {path:"**",component:PagenotfoundComponent},
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
