export class Marcador{
    id: string;
    lat: number;
    lng: number;
    titulo: string = 'Sin titulo';
    desc: string = 'Sin descripcion';

    constructor(lat: number, lng: number ){
        this.lat = lat;
        this.lng = lng;
    }
  }

