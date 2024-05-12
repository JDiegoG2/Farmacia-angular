import { Component, OnInit } from '@angular/core';
import { APIHttpService } from '../../Core/APIHttpService';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Producto } from '../../models/Models';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent implements OnInit {
  editProducto(_t17: any) {
    throw new Error('Method not implemented.');
    }
      httpService: APIHttpService;
      title = 'Formulario para CRUD Producto';
      deleteProveedoresId = 0;

      productoForm: FormGroup = this.formBuilder.group({
        id: 0,
        nombre: '',
        stock: 0,
        precio: 0,
        categoria: '',
        proveedores: ''

      });

      constructor(private http: APIHttpService, private formBuilder: FormBuilder) {
        this.httpService = http;
      }

      productoAPI: Producto[] = [];

      ngOnInit(): void {
        this.loadProductos();
      }

      onSubmit(): void {
        const newProducto = new Producto(
          this.productoForm.value.id,
          this.productoForm.value.nombre,
          this.productoForm.value.stock,
          this.productoForm.value.precio,
          this.productoForm.value.categoria,
          this.productoForm.value.proveedores,

        );

        this.http.createProducto(newProducto).subscribe({
          next: (resp) => {
            this.productoAPI.push(resp);
            console.log('Producto agregado correctamente.');
          },
          error: (err) => {
            console.error("Error al crear el prodcuto: ", err);
          }
        });

        this.productoForm.reset();
        console.warn('Your order has been submitted', this.productoForm.value.nombre);
      }

      loadProductos() {
        this.http.getProductos().subscribe({
          next: (data) => {
            this.productoAPI = data;
            console.log('Lista de producto actualizada.');
          },
          error: (err) => {
            console.error("Error al cargar productos: ", err);
          }
        });
      }

      trackById(index: number, item: Producto): any {
        return item.id;
      }

      submitDelete(productoId: number): void {
        console.log('Eliminando producto con ID: ' + productoId);

        this.http.deleteProducto(productoId).subscribe({
          next: () => {
            console.log("producto eliminado correctamente.");
            this.loadProductos();
            this.productoForm.reset();
            this.productoForm.patchValue({ id: 0 });
          },
          error: (err) => {
            console.error("Error al eliminar producto: ", err);
          }
        });
      }  
}