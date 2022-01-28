import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './services/product.service';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  declarations: [AppComponent, ProductComponent, CartComponent],
  bootstrap: [AppComponent],
  providers: [ProductService],
})
export class AppModule {}
