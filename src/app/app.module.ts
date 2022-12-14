import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangleComponent } from './rectangle/rectangle.component';
import { DirectivesComponent } from './directives/directives.component';
import { SqaureComponent } from './sqaure/sqaure.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { GpayComponent } from './gpay/gpay.component';
import { ProductComponent } from './product/product.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import {HttpClientModule} from '@angular/common/http';
import { SbibankComponent } from './sbibank/sbibank.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { BoredomComponent } from './boredom/boredom.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateBankDataComponent } from './create-bank-data/create-bank-data.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { EmployeedataComponent } from './employeedata/employeedata.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    PagenotfoundComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    DataBindingComponent,
    RectangleComponent,
    DirectivesComponent,
    SqaureComponent,
    ShoppingComponent,
    GpayComponent,
    ProductComponent,
    VehicleComponent,
    SbibankComponent,
    FlipkartComponent,
    MailComponent,
    BoredomComponent,
    CreateVehicleComponent,
    CreateBankDataComponent,
    CreateStudentComponent,
    EmployeedataComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
