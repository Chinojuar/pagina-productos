import { Component, Input, OnInit } from '@angular/core';
import { Productos } from '../productos';
import {ProductosService} from '../productos.service'

@Component({
  selector: 'app-admin-productos',
  templateUrl: './admin-productos.component.html',
  styleUrls: ['./admin-productos.component.css']
})
export class AdminProductosComponent  {
  articulo:Productos = {
    id: 0,
    descripcion: '',
    precio: 0,
  };

 articulos:Productos[] = [{ id: 1, descripcion: 'papas', precio: 25 }];

  constructor(private productoService : ProductosService){
    this.productoService.todosProductos().subscribe(data => {
      this.articulos = data;})
  };

  guardarArtuculos() {
    /*
    if (this.articulo.codigo == 0) {
      alert('El codigo debe de ser diferente a cero');
      return;
    }
    for (let i = 0; i < this.articulos.length; i++) {

      if (this.articulo.codigo == this.articulos[i].codigo) {
        alert('Este codigo ya existe, use otro');
        return;
      }
    }*/
    this.productoService.crearProducto(this.articulo).subscribe(data => {
      console.log(data)});
    
    return;
  }

  seleccionar(codigo: number, descripcion: string, precio: number) {
    (this.articulo.id = codigo),
      (this.articulo.descripcion = descripcion),
      (this.articulo.precio = precio);
    return;
  }

  modificar() {
    for (let index = 0; index < this.articulos.length; index++)
      if (this.articulo.id == this.articulos[index].id) {
        (this.articulos[index].descripcion = this.articulo.descripcion),
          (this.articulos[index].precio = this.articulo.precio);
          this.productoService.actualizar(this.articulo.id,this.articulo).subscribe(data => {
            console.log(data)});
        return;
      }
    alert('No puedes usar un código distinto');
    (this.articulo.id = 0),
      (this.articulo.descripcion = ''),
      (this.articulo.precio = 0);
  }

  borrar(codigo: number) {
    for (let index = 0; index < this.articulos.length; index++) {
      const element = this.articulos[index];
      if (codigo == element.id) {
        if (confirm('¿Estas seguro de que quieres eliminar?')) {
          this.articulos.splice(index, 1);
          this.productoService.borrar(element.id).subscribe(data => {
            console.log(data)})
          return;
        }
      }
    }
  }

}
