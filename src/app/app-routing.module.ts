import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'; 
import { ProveedorComponent } from './proveedores/proveedores.component';
import { ProductoComponent } from './producto/producto.component';
import { Categoria } from '../models/Models';
import { CategoriaComponent } from './categoria/categoria.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'proveedores', component: ProveedorComponent },
  { path: 'productos', component: ProductoComponent },
  { path: 'categorias', component: CategoriaComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
