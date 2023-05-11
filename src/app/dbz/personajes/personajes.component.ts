import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',

})
export class PersonajesComponent{


   @Input() personajes: Personaje[] = [];

  constructor (){

  }

  @Output() public onDelete: EventEmitter<string> = new EventEmitter();

  delete(id:string):void{
    this.onDelete.emit(id);
  }

  // delete(id: string){
  //   this.dbzService.borrarPersonaje(id)
  // }

  }


