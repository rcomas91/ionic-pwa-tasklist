import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaItem } from 'src/app/models/lista-item.model';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
@ViewChild(IonList) lista:IonList;
@Input() terminada=true;
  lista: Lista;
  nombreItem = '';

  constructor( private deseosService: DeseosService,private alertCtrl:AlertController,
               private route: ActivatedRoute, private router:Router ) {

    const listaId = this.route.snapshot.paramMap.get('listaId');
    this.lista = this.deseosService.obtenerLista( listaId );

  }

  ngOnInit() {
  }

  listaSeleccionada( lista: Lista ) {

    if ( this.terminada ) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${ lista.id }`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${ lista.id }`);
    }

  }
  agregarItem() {

    if ( this.nombreItem.length === 0 ) {
      return;
    }

    const nuevoItem = new ListaItem( this.nombreItem );
    this.lista.items.push( nuevoItem );

    this.nombreItem = '';
    this.deseosService.guardarStorage();
  }

  cambioCheck( item: ListaItem ) {

    const pendientes = this.lista.items
                            .filter( itemData => !itemData.completado )
                            .length;

    if ( pendientes === 0 ) {
      this.lista.terminadaEn = new Date();
      this.lista.terminada = true;
    } else {
      this.lista.terminadaEn = null;
      this.lista.terminada = false;
    }

    this.deseosService.guardarStorage();

    console.log(this.deseosService.listas);

  }

  borrar( i: number ) {

    this.lista.items.splice( i, 1 );
    this.deseosService.guardarStorage();

  }
  
  async editarLista( lista ){
    const alert= await this.alertCtrl.create({
      header: 'Editar Lista',
      inputs:[{
        name: 'titulo',
        type: 'text',
        value: lista.titulo,
        placeholder: 'Nombre de la lista'
      }
    ],
      buttons: [
        {
        text:'Cancelar',
        role:'cancel',
        handler:()=>{
          console.log('Cancelar');
          this.lista.closeSlidingItems();

        }
      },
        {
          text:'Actualizar',
          handler:(data)=>{
            console.log(data);
            if(data.titulo.length===0)
  {
    return;
  }     
    lista.titulo=data.titulo;
    this.deseosService.guardarStorage();
    this.lista.closeSlidingItems();
  
  
  }
    }
  ]
   
    });
     alert.present();
   // this.router.navigateByUrl("/tabs/agregar");
  }


}
