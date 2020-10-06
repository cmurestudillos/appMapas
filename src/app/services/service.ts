import { Injectable } from '@angular/core';
// Peticiones Http
import { HttpClient } from '@angular/common/http';
import secureEnviroment from '../../config/enviroment';
// Modelo
import { Marcador } from '../models/marcador';
// Operadores
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MarcadoresService {
  public url:string;
  marcadores:any [] = [];

  constructor(private _http: HttpClient) {
    this.url = secureEnviroment.ANGULAR_APP_DATABASE_URL;
   }

  // Peicion para obtener el listado de todos los marcadores
  getAllMarcadores(){
    return this._http.get(`${this.url}/marcadores.json`)
                .pipe(map( resp => this.marcadoresArray(resp)),
                  delay(500)
                );
  }

  // Logica para mostrar el objeto de los articulos recibido en el 'resp'
  // del map y devolverlo transofrmado en un Array para mostrar
  // en pantalla
  private marcadoresArray( marcadoresObj: Object ){

    const marcadores: Marcador[]=[];
    if(marcadoresObj === null){
      return [];
    }

    Object.keys(marcadoresObj).forEach( key => {
      const marcador: Marcador = marcadoresObj[key];
      marcador.id = key;
      // Devolvemos en el Array el objeto extraido
      marcadores.push(marcador);

    });

    return marcadores;
  }


  //Peticion para crear un articulo nuevo
  crearMarcador(marcador:Marcador){
    return this._http.post(`${this.url}/macadores.json`, marcador)
                .pipe(map( (resp: any) => {
                    marcador.id = resp.name;
                    return marcador;
                  })
                );
  }

  //Peticion para actualizar el articulo seleccionado
  editarMarcador(marcador:Marcador){
    const articuloTemporal = {
      // El spread se encarga de mandar todas la proiedades
      // sin necesidad de escribir todas una a una
      ...marcador
    }
    delete articuloTemporal.id;
    return this._http.put(`${this.url}/marcadores/${marcador.id}.json`, articuloTemporal);
  }

  // Peticion para borrar el articulo seleccionado
  borrarMarcador(id:string){
    return this._http.delete(`${this.url}/marcadores/${id}.json`)
  }

}
