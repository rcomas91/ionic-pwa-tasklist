import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ListaItem } from "src/app/models/lista-item.model";
import { Lista } from "src/app/models/lista.model";
import { DeseosService } from "src/app/services/deseos.service";
import { AlertController, IonList } from "@ionic/angular";

@Component({
  selector: "app-agregar",
  templateUrl: "./agregar.page.html",
  styleUrls: ["./agregar.page.scss"],
})
export class AgregarPage implements OnInit {
  lista: Lista;
  nombreItem = "";
  @ViewChild(IonList) lista2: IonList;

  constructor(
    private alertCtrl: AlertController,
    private deseosService: DeseosService,
    private route: ActivatedRoute
  ) {
    const listaId = this.route.snapshot.paramMap.get("listaId");
    this.lista = this.deseosService.obtenerLista(listaId);
  }

  ngOnInit() {}

  agregarItem() {
    if (this.nombreItem.length === 0) {
      return;
    }

    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);

    this.nombreItem = "";
    this.deseosService.guardarStorage();
  }

  cambioCheck(item: ListaItem) {
    const pendientes = this.lista.items.filter(
      (itemData) => !itemData.completado
    ).length;

    if (pendientes === 0) {
      this.lista.terminadaEn = new Date();
      this.lista.terminada = true;
    } else {
      this.lista.terminadaEn = null;
      this.lista.terminada = false;
    }

    this.deseosService.guardarStorage();

    console.log(this.deseosService.listas);
  }

  borrar(i: number) {
    this.lista.items.splice(i, 1);
    this.deseosService.guardarStorage();
  }

  async editarTarea(i) {
    const alert = await this.alertCtrl.create({
      header: "Editar tarea",
      inputs: [
        {
          name: "desc",
          type: "text",
          value: i.desc,
          placeholder: "Tarea a editar",
        },
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: () => {
            console.log("Cancelar");
            this.lista2.closeSlidingItems();
          },
        },
        {
          text: "Actualizar",
          handler: (data) => {
            console.log(data);
            if (data.desc.length === 0) {
              this.borrar(i);
            }
            i.desc = data.desc;
            this.deseosService.guardarStorage();
            this.lista2.closeSlidingItems();
          },
        },
      ],
    });
    alert.present();
    // this.router.navigateByUrl("/tabs/agregar");
  }
}
