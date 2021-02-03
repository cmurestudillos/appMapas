import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {

  formulario: FormGroup;

  constructor( public _formBuil: FormBuilder, public dialogRef: MatDialogRef<MapaEditarComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.formulario = _formBuil.group({
      'titulo': data.titulo,
      'desc': data.desc
    });
  }

  ngOnInit() {
  }

  actualizarMarcador(){
    this.dialogRef.close(this.formulario.value);
  }

  onNoClick() {
    this.dialogRef.close();
  }

}
