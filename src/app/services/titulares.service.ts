import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TitularesService {
  constructor(private http: HttpClient) {
    console.log('Servicio http');
  }

  getTitulares() {
    return this.http.get('http://127.0.0.1:8000/api/obtener_publicaciones');
  }

  deleteTitulares(id: any) {
    return this.http.delete(
      'http://127.0.0.1:8000/api/eliminar_publicacion/' + id
    );
  }

  createTitular(titular: any) {
    return this.http.post(
      'http://127.0.0.1:8000/api/crear_publicacion',
      titular
    );
  }

  updateTitula(titular: any) {
    return this.http.post(
      'http://127.0.0.1:8000/api/actualizar_publicacion',
      titular
    );
  }
}
