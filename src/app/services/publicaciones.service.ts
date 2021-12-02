import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PublicacionesService {
  constructor(private http: HttpClient) {
    //console.log('Servicio HTTP');
  }

  // getPublicaciones() {
  //   return this.http.get('http://127.0.0.1:8000/api/publicaciones');
  // }

  // createPublicacion(publicacion: any) {
  //   return this.http
  //     .post('http://127.0.0.1:8000/api/crear_publicacion2', publicacion)
  //     .subscribe((data: any) => console.log(data));
  // }

  // updatePublicacion(publicacion: any) {
  //   return this.http
  //     .post('http://127.0.0.1:8000/api/actualizar_publicacion', publicacion)
  //     .subscribe((data) => console.log(data));
  // }

  // deletePublicacion(id: any) {
  //   return this.http
  //     .delete('http://127.0.0.1:8000/api/eliminar_publicacion/' + id)
  //     .subscribe((data) => console.log(data));
  // }

  getPublicaciones() {
    return this.http.get('http://127.0.0.1:8000/api/publicaciones');
  }

  createPublicacion(publicacion: any) {
    return this.http.post(
      'http://127.0.0.1:8000/api/crear_publicacion2',
      publicacion
    );
    //.subscribe((data: any) => console.log(data));
  }

  updatePublicacion(publicacion: any) {
    return this.http.post(
      'http://127.0.0.1:8000/api/actualizar_publicacion',
      publicacion
    );
    //.subscribe((data) => console.log(data));
  }

  deletePublicacion(id: any) {
    return this.http.delete(
      'http://127.0.0.1:8000/api/eliminar_publicacion/' + id
    );
    //.subscribe((data) => console.log(data));
  }
}
