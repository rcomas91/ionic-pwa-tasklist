import { Injectable } from "@angular/core";
import { ListaItem } from "../models/lista-item.model";
import { Lista } from "../models/lista.model";

@Injectable({
  providedIn: "root",
})
export class DeseosService {
  listas: Lista[] = [];
  tarea: ListaItem;
  constructor() {
    this.cargarStorage();

    console.log(this.listas);
  }

  crearLista(titulo: string) {
    const nuevalista = new Lista(titulo);
    this.listas.push(nuevalista);
    this.guardarStorage();

    return nuevalista.id;
  }

  borrarLista(lista: Lista) {
    this.listas = this.listas.filter((listaData) => listaData.id !== lista.id);
    this.guardarStorage();
  }

  obtenerLista(id: string | number) {
    id = Number(id);
    return this.listas.find((listaData) => listaData.id === id);
  }

  obtenertarea(tarea: string) {
    return this.tarea.desc;
  }

  guardarStorage() {
    localStorage.setItem("data", JSON.stringify(this.listas));
  }

  
  cargarStorage() {
    if (localStorage.getItem("data")) {
      this.listas = JSON.parse(localStorage.getItem("data"));
    } else {
      this.listas = [];
    }
  }
}
