import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { APIHttpService } from '../../Core/APIHttpService';
import { Cliente } from '../../models/Models';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.scss'
})
export class ClienteComponent implements OnInit {
  editCliente(_t17: any) {
  throw new Error('Method not implemented.');
  }
    httpService: APIHttpService;
    title = 'Formulario para CRUD cliente';
    deleteClienteId = 0;
  
    clienteForm: FormGroup = this.formBuilder.group({
      id: 0,
      nroDocumento: '',
      nombres: '',
      apellidos: '',
    });
  
    constructor(private http: APIHttpService, private formBuilder: FormBuilder) {
      this.httpService = http;
    }
  
    clienteAPI: Cliente[] = [];
  
    ngOnInit(): void {
      this.loadClientes();
    }
  
    onSubmit(): void {
      const newCliente = new Cliente(
        this.clienteForm.value.id,
        this.clienteForm.value.nroDocumento,
        this.clienteForm.value.nombres,
        this.clienteForm.value.apellidos,
      );
  
      this.http.createCliente(newCliente).subscribe({
        next: (resp) => {
          this.clienteAPI.push(resp);
          console.log('Cliente agregado correctamente.');
        },
        error: (err) => {
          console.error("Error al crear el cliente: ", err);
        }
      });
  
      this.clienteForm.reset();
      console.warn('Your order has been submitted', this.clienteForm.value.nombre);
    }
  
    loadClientes() {
      this.http.getClientes().subscribe({
        next: (data) => {
          this.clienteAPI = data;
          console.log('Lista de clientes actualizada.');
        },
        error: (err) => {
          console.error("Error al cargar clientes: ", err);
        }
      });
    }
  
    trackById(index: number, item: Cliente): any {
      return item.id;
    }
  
    submitDelete(clienteId: number): void {
      console.log('Eliminando cliente con ID: ' + clienteId);
    
      this.http.deleteCliente(clienteId).subscribe({
        next: () => {
          console.log("Cliente eliminado correctamente.");
          this.loadClientes();
          this.clienteForm.reset();
          this.clienteForm.patchValue({ id: 0 });
        },
        error: (err) => {
          console.error("Error al eliminar cliente: ", err);
        }
      });
    }  
  }
  