import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIHttpService } from '../../Core/APIHttpService';
import { Proveedor } from '../../models/Models';


@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})
export class ProveedorComponent implements OnInit {
editProveedor(_t17: any) {
throw new Error('Method not implemented.');
}
  httpService: APIHttpService;
  title = 'Formulario para CRUD Proveedor';
  deleteProveedoresId = 0;

  proveedorForm: FormGroup = this.formBuilder.group({
    id: 0,
    nroDocumento: ['', [Validators.required, Validators.maxLength(8), Validators.pattern('^[0-9]*$')]], // Aplica las validaciones
    tipoDocumento: '',
    nombre: '',
    apellido: '',
    razonSocial: '',
    direccion: '',
  });

  constructor(private http: APIHttpService, private formBuilder: FormBuilder) {
    this.httpService = http;
  }

  proveedorAPI: Proveedor[] = [];

  ngOnInit(): void {
    this.loadProveedores();
  }

  onSubmit(): void {
    const newProveedor = new Proveedor(
      this.proveedorForm.value.id,
      this.proveedorForm.value.nroDocumento,
      this.proveedorForm.value.tipoDocumento,
      this.proveedorForm.value.nombre,
      this.proveedorForm.value.apellido,
      this.proveedorForm.value.razonSocial,
      this.proveedorForm.value.direccion
    );

    this.http.createProveedor(newProveedor).subscribe({
      next: (resp) => {
        this.proveedorAPI.push(resp);
        console.log('Proveedor agregado correctamente.');
      },
      error: (err) => {
        console.error("Error al crear el proveedor: ", err);
      }
    });

    this.proveedorForm.reset();
    console.warn('Your order has been submitted', this.proveedorForm.value.nombre);
  }

  loadProveedores() {
    this.http.getProveedores().subscribe({
      next: (data) => {
        this.proveedorAPI = data;
        console.log('Lista de proveedores actualizada.');
      },
      error: (err) => {
        console.error("Error al cargar proveedores: ", err);
      }
    });
  }

  trackById(index: number, item: Proveedor): any {
    return item.id;
  }

  submitDelete(proveedorId: number): void {
    console.log('Eliminando proveedor con ID: ' + proveedorId);
  
    this.http.deleteProveedor(proveedorId).subscribe({
      next: () => {
        console.log("Proveedor eliminado correctamente.");
        this.loadProveedores();
        this.proveedorForm.reset();
        this.proveedorForm.patchValue({ id: 0 });
      },
      error: (err) => {
        console.error("Error al eliminar proveedor: ", err);
      }
    });
  }  
}
