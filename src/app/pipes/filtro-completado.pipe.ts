import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(listas: any[], completado: boolean=true): any[] {
    
    return listas.filter(lista=>lista.terminada===completado);
;
  }

}
