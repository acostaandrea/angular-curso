import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Output()
  public onNewCharacter: EventEmitter<Personaje> = new EventEmitter();

  public character: Personaje = {
    nombre: '',
    poder: 0
  };

  emitCharacter():void {

    if ( this.character.nombre.length === 0 ) return;

    this.onNewCharacter.emit(this.character);

    this.character = { nombre: '', poder: 0 };
  }



  }


