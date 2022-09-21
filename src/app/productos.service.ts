import { EventEmitter, Injectable, Output } from '@angular/core';
import { Productos } from './productos';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private producto : Productos[] =[];
  observador = new BehaviorSubject<Productos[]>([])

  constructor(
    private http: HttpClient
  ) { }
/*
  crearProducto(producto:Productos){
    this.productos = [...this.productos,producto];
    this.observador.next(this.productos);
  }
*/
todosProductos():Observable<Productos[]> {
  return this.http.get<Productos[]>("http://localhost:9090/obtenerProductos");
}
/*
traerProducto(id: number) {
  return this.http.get<Productos>("http://localhost:9095/obtenerProducto/id")
}*/

crearProducto(producto: Productos) {
  return this.http.put<Productos>("http://localhost:9090/guardarDtoProducto",producto);
}

actualizar(id: number, producto: Productos) {
  const url ="http://localhost:9090/actualizaProducto"
  return this.http.put<Productos>(`${url}/${id}`,producto);
}

borrar(id: number) {
  const url ="http://localhost:9090/borrarProducto"
  return this.http.delete<boolean>(`${url}/${id}`);
}
}
