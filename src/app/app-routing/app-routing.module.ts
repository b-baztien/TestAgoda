import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { CartComponent } from '../cart/cart.component';

const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: '/product', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
