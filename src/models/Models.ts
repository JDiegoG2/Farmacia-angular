export class Categoria {
    constructor(
      public id: number = 0,
      public nombre: string = ''
    ) {}
  }
  
  export class Proveedor {
    constructor(
      public id: number = 0,
      public nroDocumento: string = '',
      public tipoDocumento: string = '',
      public nombre: string = '',
      public apellido: string = '',
      public razonSocial: string = '',
      public direccion: string = ''
    ) {}
  }
  
  export class Producto {
    constructor(
      public id: number = 0,
      public nombre: string = '',
      public stock: number = 0,
      public precio: number = 0,
    ) {}
  }
  
  export class Cliente {
    constructor(
      public id: number = 0,
      public nombres: string = '',
      public apellidos: string = '',
      public nroDocumento: string = ''
    ) {}
  }
  
  export class Venta {
    constructor(
      public id: number = 0,
      public producto: Producto = new Producto(),
      public cantidad: number = 0,
      public precioUnidad: number = 0,
      public precioTotal: number = 0,
      public cliente: Cliente = new Cliente()
    ) {}
  }
  
  export class Usuario {
    constructor(
      public id: number = 0,
      public nombre: string = '',
      public usuario: string = '',
      public contrasena: string = ''
    ) {}
  }
  
  export class Movimiento {
    constructor(
      public id: number = 0,
      public producto: Producto = new Producto(),
      public proveedores: Proveedor = new Proveedor(),
      public cantidad: number = 0,
      public costo: number = 0,
      public fecha: string = ''
    ) {}
  }
  