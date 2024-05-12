import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venta, Proveedor, Producto, Cliente, Categoria } from '../models/Models';

@Injectable({
  providedIn: 'root'
})
export class APIHttpService {
  private baseUrl = 'http://localhost:7070'; // OJO! esto debido a la configuracion en proxy.conf.json para mejo cors

  constructor(private http: HttpClient) { }

  // Auth endpoints
  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  // Venta endpoints
  createVenta(venta: Venta): Observable<Venta> {
    return this.http.post<Venta>(`${this.baseUrl}/api/venta`, venta);
  }

  getVentas(): Observable<Venta[]> {
    return this.http.get<Venta[]>(`${this.baseUrl}/api/ventas`);
  }

  getVentaById(ventaId: number): Observable<Venta> {
    return this.http.get<Venta>(`${this.baseUrl}/api/venta/${ventaId}`);
  }

  // Proveedor endpoints
  createProveedor(proveedor: Proveedor): Observable<Proveedor> {
    return this.http.post<Proveedor>(`${this.baseUrl}/api/proveedor`, proveedor);
  }

  getProveedores(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(`${this.baseUrl}/api/proveedores`);
  }

  getProveedorById(proveedorId: number): Observable<Proveedor> {
    return this.http.get<Proveedor>(`${this.baseUrl}/api/proveedor/${proveedorId}`);
  }

  deleteProveedor(proveedorId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/api/proveedor/${proveedorId}`);
  }

  updateProveedor(proveedorId: number, proveedor: Proveedor): Observable<Proveedor> {
    return this.http.put<Proveedor>(`${this.baseUrl}/api/proveedor/${proveedorId}`, proveedor);
  }
  

  // Producto endpoints
  createProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${this.baseUrl}/api/producto`, producto);
  }

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.baseUrl}/api/productos`);
  }

  getProductoById(productoId: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.baseUrl}/api/producto/${productoId}`);
  }

  deleteProducto(productoId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/api/producto/${productoId}`);
  }

  // Cliente endpoints
  createCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.baseUrl}/api/cliente`, cliente);
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.baseUrl}/api/clientes`);
  }

  getClienteById(clienteId: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.baseUrl}/api/cliente/${clienteId}`);
  }

  deleteCliente(clienteId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/api/cliente/${clienteId}`);
  }

  // Categoria endpoints
  createCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(`${this.baseUrl}/api/categoria`, categoria);
  }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.baseUrl}/api/categorias`);
  }

  getCategoriaById(categoriaId: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.baseUrl}/api/categoria/${categoriaId}`);
  }

  deleteCategoria(categoriaId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/api/categoria/${categoriaId}`);
  }
}
