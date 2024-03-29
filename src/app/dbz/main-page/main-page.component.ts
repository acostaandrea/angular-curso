import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {



  constructor(private dbzService: DbzService) { }

  get characters(): Personaje[] {
    return this.dbzService.personajes;
  }

  onDeleteCharacter(id: string) {
    this.dbzService.borrarPersonaje(id);
  }

  onNewCharacter(character: Personaje) {
    this.dbzService.agregarPersonaje(character);
  }




}
