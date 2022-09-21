import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductosComponent } from './admin-productos/admin-productos.component';
import { ProductosComponent } from './productos/productos.component';
import { SimplePageComponent } from './simple-page/simple-page.component';

const routes: Routes = [
  
  {
    path: '',
    component: ProductosComponent
  },
{
  path: 'productos',
  component: ProductosComponent
},
{
  path: 'administrador',
  component: AdminProductosComponent
},
{
  path: 'inicio',
  component: SimplePageComponent
}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
