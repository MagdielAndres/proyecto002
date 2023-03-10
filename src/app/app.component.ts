import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  art={
    codigo: 0,
    descripcion: "",
    precio: 0
  }

  articulos = [{codigo:1, descripcion:'papas', precio: 10.55},
               {codigo:2, descripcion:'Manzanas', precio: 12.10},
               {codigo:3, descripcion:'Melon', precio: 52.30},
               {codigo:4, descripcion:'Cebollas', precio: 17},
               {codigo:5, descripcion:'Calabazas', precio: 20}
              ];

  hayRegistros(){
    return this.articulos.length>0;
  }

  borrar(codigo:number){
    for(let i = 0; i < this.articulos.length; i++){
      if(this.articulos[i].codigo == codigo){
        this.articulos.splice(i, 1);
      }
    }
  }

  seleccionar(art: {codigo: number; descripcion: string; precio: number}){
    this.art.codigo = art.codigo;
    this.art.descripcion = art.descripcion;
    this.art.precio = art.precio;
  }

  agregar(){
    if(this.art.codigo == 0){
      alert('Debe ingresar un código de articulo distinto a cero!!!');
      return;
    }

    for (let i = 0; i < this.articulos.length; i++) {
      if(this.articulos[i].codigo == this.art.codigo){
        alert('Ya existe un articulo con dicho codigo');
        return;
      }
    }

    this.articulos.push({codigo:this.art.codigo,
                        descripcion:this.art.descripcion,
                        precio:this.art.precio});

    this.art.codigo=0;
    this.art.descripcion="";
    this.art.precio=0;
  }

  modificar(){
    for (let i = 0; i < this.articulos.length; i++) {
      if(this.articulos[i].codigo == this.art.codigo){
        this.articulos[i].descripcion =this.art.descripcion;
        this.articulos[i].precio=this.art.precio;
        return;
      }
      alert('No existe el código de articulo ingresado');
    }
  }

}
