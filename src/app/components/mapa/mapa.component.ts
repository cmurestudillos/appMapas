import { Component, OnInit } from '@angular/core';
// Clase
import { Marcador } from '../../models/marcador';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];

  lat: number = 40.4169019;
  lng: number = -3.7056721;

  constructor(public _snackBar: MatSnackBar, public dialog: MatDialog ) {
    // // Cargamos el marcador de forma estatica
    // const nuevoMarcador = new Marcador( 40.4169019, -3.7056721);
    // this.marcadores.push(nuevoMarcador);
    if(localStorage.getItem('marcadores')){
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }

   }

  ngOnInit() {
  }

  // Metodo para crear nuevos marcadores en el Mapa
  agregarMarcador(evento){
    // console.log(evento);
    // console.log(evento.coords.lat);
    const nuevoMarcador = new Marcador( evento.coords.lat, evento.coords.lng);
    this.marcadores.push(nuevoMarcador);
    this.guardarStorage();
    // Simple message with an action.
    this._snackBar.open('Marcador agregado', 'Cerrar', { duration: 1500});
  }


  // Metodo para borrar marcadores
  borrarMarcador(ind: number){
    // console.log(ind);
    this.marcadores.splice(ind, 1);
    this.guardarStorage();
    this._snackBar.open('Marcador borrado', 'Cerrar', { duration: 1500});
  }

  // Metodo para editar marcador seleccionado
  editarMarcador(marcador: Marcador){
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: {titulo: marcador.titulo, desc: marcador.desc}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result){
        return;
      }
      marcador.titulo = result.titulo;
      marcador.desc = result.desc;

      this.guardarStorage();
      this._snackBar.open('Marcador actualizado', 'Cerrar', { duration: 1500});

    });

  }

  // Metodo para guardar en el localStorage los marcadores creados
  // al recargar la pagina con F5
  guardarStorage(){
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }


}
