import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { APIHttpService } from '../../Core/APIHttpService';
import { Categoria } from '../../models/Models';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent implements OnInit {
  editCategoria(_t17: any) {
  throw new Error('Method not implemented.');
  }
    httpService: APIHttpService;
    title = 'Formulario para CRUD Categoria';
    deleteCategoriaId = 0;
  
    categoriaForm: FormGroup = this.formBuilder.group({
      id: 0,
      nroDocumento: '', // Aplica las validaciones
      tipoDocumento: '',
      nombre: '',
      apellido: '',
      razonSocial: '',
      direccion: '',
    });
  
    constructor(private http: APIHttpService, private formBuilder: FormBuilder) {
      this.httpService = http;
    }
  
    categoriaAPI: Categoria[] = [];
  
    ngOnInit(): void {
      this.loadCategorias();
    }
  
    onSubmit(): void {
      const newCategoria = new Categoria(
        this.categoriaForm.value.id,
        this.categoriaForm.value.nombre
      );
  
      this.http.createCategoria(newCategoria).subscribe({
        next: (resp) => {
          this.categoriaAPI.push(resp);
          console.log('Proveedor agregado correctamente.');
        },
        error: (err) => {
          console.error("Error al crear el proveedor: ", err);
        }
      });
  
      this.categoriaForm.reset();
      console.warn('Your order has been submitted', this.categoriaForm.value.nombre);
    }
  
    loadCategorias() {
      this.http.getCategorias().subscribe({
        next: (data) => {
          this.categoriaAPI = data;
          console.log('Lista de categorias actualizada.');
        },
        error: (err) => {
          console.error("Error al cargar categoria: ", err);
        }
      });
    }
  
    trackById(index: number, item: Categoria): any {
      return item.id;
    }
  
    submitDelete(categoriaId: number): void {
      console.log('Eliminando categoria con ID: ' + categoriaId);
    
      this.http.deleteCategoria(categoriaId).subscribe({
        next: () => {
          console.log("Categoria eliminado correctamente.");
          this.loadCategorias();
          this.categoriaForm.reset();
          this.categoriaForm.patchValue({ id: 0 });
        },
        error: (err) => {
          console.error("Error al eliminar categoria: ", err);
        }
      });
    }  
  }
  