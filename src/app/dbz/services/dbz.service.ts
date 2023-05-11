import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';
import {v4 as uuid} from "uuid"


@Injectable({
    providedIn: 'root'
})
export class DbzService{

    private _personajes: Personaje[]=[
        {
          id: uuid(),
          nombre:'Goku',
          poder: 15000
        },
        {
          id: uuid(),
          nombre: 'Vegeta',
          poder: 8500
        },
        {
          id: uuid(),
          nombre: 'Krillin',
          poder: 7000
        }
      ];

    get personajes(): Personaje[]{
        return [...this._personajes];
    }

    constructor(){}

    agregarPersonaje(character:Personaje){
      const newCharacter:Personaje = {
        id: uuid(), ...character

      }
      this._personajes.push(newCharacter)
    }

    // borrarPersonaje(index:number){
    //   this._personajes.splice(index,1);
    // }

    borrarPersonaje(id:string){
      this._personajes = this._personajes.filter( personaje => personaje.id !== id)
    }
    

}
