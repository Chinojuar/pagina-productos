import { Component, Input, OnInit } from '@angular/core';
import {AdminProductosComponent} from '../admin-productos/admin-productos.component'
import { Productos } from '../productos';

import {ProductosService} from '../productos.service'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent  {
   
  public productos:Productos[] = [];

  constructor(private productoService : ProductosService){};
   
  ngOnInit()  {
this.productoService.todosProductos().subscribe(data => {
 this.productos = data;
 console.log(this.productos)
})
  }

}
